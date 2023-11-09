import {defineType, defineField} from 'sanity'

const organisation = defineType({
  name: 'organisation',
  type: 'object',
  title: 'Organisation',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})

export default organisation
