import { definePlugin } from 'sanity';
import types from './schemas/types';

export const schemaMarkup = definePlugin(() => {
  return {
    name: '@operationnation/sanity-plugin-schema-markup',
    schema: { types }
  };
});
