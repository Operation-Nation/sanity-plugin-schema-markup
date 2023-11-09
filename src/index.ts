import {definePlugin} from 'sanity'
import schema from './schemas/Schema'
import article from './schemas/types/article'
import organisation from './schemas/types/organisation'
import SchemaScript from './components/SchemaScript'

export const schemaMarkup = definePlugin(() => {
  return {
    name: '@operationnation/sanity-plugin-schema-markup',
    schema: {
      types: [schema, article, organisation],
    },
  }
})

export {SchemaScript}
