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
      if (value) {
        if (typeof value === 'object' && !Array.isArray(value)) {
          if (value.type === 'SeekToAction') {
            jsonLd[prop] = {
              '@type': value.type,
              target: `${value?.searchUrl}={seek_to_second_number}`,
              'startOffset-input': 'required name=seek_to_second_number',
              ...value
            };
          } else if (value.type === 'SearchAction') {
            jsonLd[prop] = {
              '@type': value.type,
              target: `${value?.searchUrl}{search_term_string}${value?.optionalString}`,
              'query-input': 'required name=search_term_string',
              ...value
            };
          } else if (value.type === 'AggregateRating') {
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
                '@type': value.type,
                ...value
              };
            }
          } else if (value.logo) {
            const { logo, ...rest } = value;
            const imgUrl = getImgUrl(value?.logo?.asset?._ref);
            const strLogo = JSON.stringify({ logo: imgUrl });
            jsonLd[prop] = {
              strLogo,
              ...rest
            };
          } else if (value._type === 'image') {
            jsonLd[prop] = getImgUrl(value?.asset?._ref);
          } else if (value._type === 'mainImage') {
            jsonLd[prop] = getImgUrl(value?.asset?._ref);
          } else {
            jsonLd[prop] = value.id
              ? { '@id': value.id, '@type': value.type, ...value }
              : {
                  '@type': value.type,
                  ...value
                };
          }
        } else if (Array.isArray(value) && typeof value[0] !== 'string') {
          jsonLd[prop] = value.map((item, index) => {
            if (item._type === 'productReviewType') {
              const agtRating = obj?.aggregateRating;
              const { reviewRating, ...rest } = item;
              return {
                reviewRating: {
                  bestRating: agtRating.bestRating,
                  worstRating: agtRating.worstRating,
                  ...reviewRating
                },
                ...rest
              };
            }
            if (item._type === 'image') {
              return getImgUrl(item.asset._ref);
            }
            if (item._type === 'mainImage') {
              return getImgUrl(item.asset._ref);
            }
            if (item.type === 'ListItem') {
              return item.id
                ? { '@id': item.id, position: index + 1, '@type': item.type, ...item }
                : {
                    '@type': item.type,
                    position: index + 1,
                    ...item
                  };
            }
            return item.id
              ? { '@id': item.id, '@type': item.type, ...item }
              : {
                  '@type': item.type,
                  ...item
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
