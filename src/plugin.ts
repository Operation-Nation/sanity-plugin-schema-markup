import { definePlugin } from 'sanity';
import schema from './schemas/Schema';
import article from './schemas/types/article';
import organization from './schemas/types/organization';

const schemaMarkup = definePlugin(() => {
  return {
    name: '@operationnation/sanity-plugin-schema-markup',
    schema: {
      types: [schema, article, organization]
    }
  };
});

export default schemaMarkup;
