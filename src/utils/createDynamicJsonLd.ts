/* eslint-disable @typescript-eslint/no-explicit-any */
import detectSchemaType from './detectSchemaType';
import matchAndRemoveKeys from './matchAndRemoveKeys';
import createImgUrl from './createImgUrl';

type Schema = Record<string, any>;

type JsonLdObject = {
  [key: string]: any;
  '@type': string;
};

function createDynamicJsonLd(schemaObj: Schema, projectId: string, dataset: string) {
  const pattern = detectSchemaType(schemaObj);
  const obj = schemaObj;
  const { getImgUrl } = createImgUrl(projectId, dataset);
  const jsonLd: JsonLdObject = obj.id
    ? { '@id': obj.id, '@type': obj.type }
    : {
        '@type': obj.type
      };
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(prop) && prop !== '_type') {
      const value = obj[prop];
      const { type, id, ...rest } = value ?? {};
      if (value) {
        if (typeof value === 'object' && !Array.isArray(value)) {
          if (type === 'SeekToAction') {
            jsonLd[prop] = {
              '@type': type,
              target: `${value?.searchUrl}={seek_to_second_number}`,
              'startOffset-input': 'required name=seek_to_second_number',
              ...rest
            };
          } else if (type === 'SearchAction') {
            jsonLd[prop] = {
              '@type': type,
              target: `${value?.searchUrl}{search_term_string}${value?.optionalString}`,
              'query-input': 'required name=search_term_string',
              ...rest
            };
          } else if (type === 'AggregateRating') {
            if (obj?.review && obj?.review?.length > 0) {
              const reviews = obj.review;
              const countRating = reviews.filter(item => item.reviewRating.ratingValue);
              const countReview = reviews.length;
              const getRatingValue =
                reviews.reduce((r, c) => r + Number(c.reviewRating.ratingValue), 0) /
                reviews.length;
              jsonLd[prop] = {
                ratingValue: String(getRatingValue),
                reviewCount: String(countReview),
                ratingCount: String(countRating.length),
                '@type': type,
                ...rest
              };
            }
          } else if (value?.logo) {
            const { logo, type, ...rest } = value;
            const imgUrl = getImgUrl(value?.logo?.asset?._ref);
            jsonLd[prop] = {
              '@type': type,
              strLogo: imgUrl,
              ...rest
            };
          } else if (value?._type === 'image') {
            jsonLd[prop] = getImgUrl(value?.asset?._ref);
          } else if (value?._type === 'mainImage') {
            jsonLd[prop] = getImgUrl(value?.asset?._ref);
          } else {
            jsonLd[prop] = id
              ? { '@id': id, '@type': type, ...rest }
              : {
                  '@type': type,
                  ...rest
                };
          }
        } else if (Array.isArray(value) && typeof value[0] !== 'string') {
          jsonLd[prop] = value.map((item, index) => {
            const { id, type, _type, reviewRating, author, publisher, ...restItem } = item;
            if (_type === 'productReviewType') {
              const agtRating = obj?.aggregateRating;
              return {
                '@type': item.type,
                reviewRating: {
                  bestRating: agtRating.bestRating,
                  worstRating: agtRating.worstRating,
                  ...reviewRating
                },
                author: {
                  '@type': author.type,
                  name: author.name
                },
                publisher: {
                  '@type': publisher.type,
                  name: publisher.name
                },
                ...restItem
              };
            }
            if (_type === 'image') {
              return getImgUrl(restItem.asset._ref);
            }
            if (_type === 'mainImage') {
              return getImgUrl(restItem.asset._ref);
            }
            if (type === 'ListItem') {
              return id
                ? { '@id': id, position: index + 1, '@type': type, ...item }
                : {
                    '@type': type,
                    position: index + 1,
                    ...restItem
                  };
            }
            return id
              ? { '@id': id, '@type': type, ...restItem }
              : {
                  '@type': type,
                  ...restItem
                };
          });
        } else {
          jsonLd[prop] = value;
        }
      }
    }
  }
  return matchAndRemoveKeys(jsonLd, pattern);
}

export default createDynamicJsonLd;
