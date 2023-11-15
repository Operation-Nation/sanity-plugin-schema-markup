import { defineType, defineField } from 'sanity';
import contactPoint from './contactPoint';
import OrganizationListSelect from './OrganizationListSelect';
import id from '../../common/id';

const organization = defineType({
  name: 'organization',
  type: 'object',
  title: 'Organization',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      components: {
        input: OrganizationListSelect
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
      type: 'image'
    }),
    contactPoint,
    defineField({
      name: 'sameAs',
      title: 'Social Profiles',
      description: 'Add social profile url on each field',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    id
  ]
});

export default organization;
