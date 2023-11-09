/* eslint-disable @typescript-eslint/no-explicit-any */
import detectSchemaType from './detectSchemaType';
import matchAndRemoveKeys from './matchAndRemoveKeys';

type Schema = Record<string, any>;

type JsonLdObject = {
  [key: string]: string;
  '@type': string;
};

function createDynamicJsonLd(schemaObj: Schema) {
  const pattern = detectSchemaType(schemaObj);
  const obj = schemaObj;
  const jsonLd: JsonLdObject = {
    '@type': obj.type
  };
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(prop) && prop !== '_type') {
      const value = obj[prop];
      if (value) {
        if (typeof value === 'object' && !Array.isArray(value)) {
          jsonLd[prop] = {
            '@type': value.type,
            ...value
          };
        } else {
          jsonLd[prop] = value;
        }
      }
    }
  }
  return matchAndRemoveKeys(jsonLd, pattern);
}

export default createDynamicJsonLd;
