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
      const { id, ...rest } = value ?? {};
      if (value) {
        if (typeof value === 'object' && !Array.isArray(value)) {
          if (value?.type === 'OfferCatalog') {
            jsonLd[prop] = {
              '@type': value?.type,
              name: value?.name,
              itemListElement: value?.itemListElement?.map(item => ({
                '@type': item?.type,
                name: item?.name,
                itemListElement: item?.itemListElement?.map(subitem => ({
                  '@type': subitem?.type,
                  itemOffered: {
                    '@type': subitem?.itemOffered?.type,
                    name: subitem?.itemOffered?.name
                  }
                }))
              }))
            };
          } else if (value?.type === 'SeekToAction') {
            jsonLd[prop] = {
              '@type': value?.type,
              target: `${value?.searchUrl}={seek_to_second_number}`,
              'startOffset-input': 'required name=seek_to_second_number',
              ...rest
            };
          } else if (value?.type === 'SearchAction') {
            jsonLd[prop] = {
              '@type': value?.type,
              target: `${value?.searchUrl}{search_term_string}${value?.optionalString}`,
              'query-input': 'required name=search_term_string',
              ...rest
            };
          } else if (value?.type === 'AggregateRating') {
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
                '@type': value?.type,
                ...rest
              };
            }
          } else if (value?.logo) {
            const { logo, ...restValue } = value;
            const imgUrl = getImgUrl(value?.logo?.asset?._ref);
            jsonLd[prop] = {
              '@type': value?.type,
              strLogo: imgUrl,
              ...restValue
            };
          } else if (value?._type === 'image') {
            jsonLd[prop] = getImgUrl(value?.asset?._ref);
          } else if (value?._type === 'mainImage') {
            jsonLd[prop] = getImgUrl(value?.asset?._ref);
          } else {
            jsonLd[prop] = id
              ? { '@id': id, '@type': value?.type, ...rest }
              : {
                  '@type': value?.type,
                  ...rest
                };
          }
        } else if (Array.isArray(value) && typeof value[0] !== 'string') {
          jsonLd[prop] = value.map((item, index) => {
            const { type, reviewRating, author, publisher, ...restItem } = item;
            if (item?._type === 'productReviewType') {
              const agtRating = obj?.aggregateRating;
              return {
                '@type': item?.type,
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
            if (item?.image) {
              return getImgUrl(item?.image?.asset?._ref);
            }
            if (item?._type === 'image') {
              return getImgUrl(restItem.asset._ref);
            }
            if (item?._type === 'mainImage') {
              return getImgUrl(restItem.asset._ref);
            }
            if (type === 'ListItem') {
              return item?.id
                ? { '@id': item?.id, position: index + 1, '@type': type, ...item }
                : {
                    '@type': type,
                    position: index + 1,
                    ...restItem
                  };
            }
            return item?.id
              ? { '@id': item?.id, '@type': type, ...restItem }
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
