/* eslint-disable @typescript-eslint/no-explicit-any */
import detectSchemaType from './detectSchemaType';
import matchAndRemoveKeys from './matchAndRemoveKeys';

type Schema = Record<string, any>;

type JsonLdObject = {
  [key: string]: any;
  '@type': string;
};

function createDynamicJsonLd(schemaObj: Schema) {
  const pattern = detectSchemaType(schemaObj);
  const obj = schemaObj;
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
          jsonLd[prop] = value.id
            ? { '@id': value.id, '@type': value.type, ...value }
            : {
                '@type': value.type,
                ...value
              };
        } else if (Array.isArray(value) && typeof value[0] !== 'string') {
          jsonLd[prop] = value.map((item, index) => {
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
