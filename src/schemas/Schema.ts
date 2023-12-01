import { defineType } from 'sanity';
import SchemaTypeSelector from '../components/SchemaTypeSelector';

const schema = defineType({
  title: 'Schema Markup',
  name: 'schemaMarkup',
  type: 'array',
  of: [
    { type: 'article' },
    { type: 'breadcrumbList' },
    { type: 'faqPageType' },
    { type: 'howToType' },
    { type: 'imageObjectType' },
    { type: 'localBusiness' },
    { type: 'organization' },
    { type: 'personType' },
    { type: 'productType' },
    { type: 'recipeType' },
    { type: 'reviewType' },
    { type: 'socialMediaPosting' },
    { type: 'serviceType' },
    { type: 'videoObjectType' },
    { type: 'webPageType' },
    { type: 'websiteType' }
  ],
  components: {
    input: SchemaTypeSelector
  }
});

export default schema;
