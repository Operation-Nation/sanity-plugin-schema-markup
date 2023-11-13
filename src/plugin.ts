import types from './schemas/types';
import { definePlugin } from 'sanity';

const schemaMarkup = definePlugin(() => {
  return {
    name: '@operationnation/sanity-plugin-schema-markup',
    schema: { types }
  };
});

export default schemaMarkup;
