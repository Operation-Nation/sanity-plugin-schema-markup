import { defineType, defineField } from 'sanity';
import organizationType from './list/organizationType';
import contactPoint from './contactPoint';

const organization = defineType({
  name: 'organization',
  type: 'object',
  title: 'Organization',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: organizationType
      },
      initialValue: 'Organization'
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'alternateName',
      title: 'Alternate Name',
      type: 'string'
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url'
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'url'
    }),
    contactPoint,
    defineField({
      name: 'sameAs',
      title: 'Social Profiles',
      description: 'Add social profile url on each field',
      type: 'array',
      of: [{ type: 'string' }]
    })
  ]
});

export default organization;
