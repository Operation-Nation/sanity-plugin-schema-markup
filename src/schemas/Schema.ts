import { defineType } from 'sanity';

const schema = defineType({
  title: 'Schema Markup',
  name: 'schemaMarkup',
  type: 'array',
  of: [
    { type: 'article' },
    { type: 'organization' },
    { type: 'localBusiness' },
    { type: 'breadcrumbList' }
  ]
});

export default schema;
