import {defineType} from 'sanity'
import SchemaMarkup from '../components/SchemaMarkup'

const schema = defineType({
  title: 'Schema Markup',
  name: 'schemaMarkup',
  type: 'array',
  of: [{type: 'article'}, {type: 'organization'}],
  description: 'This icon will be used as a graphic element in the design on the front end',
  components: {input: SchemaMarkup},
})

export default schema
