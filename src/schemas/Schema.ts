import { defineType } from 'sanity';
import SchemaTypeSelector from '../components/SchemaTypeSelector';

const schema = defineType({
  title: 'Schema Markup',
  name: 'schemaMarkup',
  type: 'array',
  of: [
    { type: 'article' },
    { type: 'organization' },
    { type: 'localBusiness' },
    { type: 'breadcrumbList' },
    { type: 'socialMediaPosting' },
    { type: 'personType' },
    { type: 'reviewType' },
    { type: 'serviceType' },
    { type: 'productType' },
    { type: 'websiteType' },
    { type: 'faqPageType' },
    { type: 'recipeType' },
    { type: 'howToType' },
    { type: 'webPageType' },
    { type: 'imageObjectType' },
    { type: 'videoObjectType' }
  ],
  components: {
    input: SchemaTypeSelector
  }
});

export default schema;
