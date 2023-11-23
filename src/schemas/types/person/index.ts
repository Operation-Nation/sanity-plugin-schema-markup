import { defineType, defineField } from 'sanity';
import { MdPerson } from 'react-icons/md';
import id from '../../common/id';

const person = defineType({
  name: 'personType',
  type: 'object',
  title: 'Person',
  icon: MdPerson,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      hidden: true,
      initialValue: 'Person'
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image'
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string'
    }),
    defineField({
      name: 'worksFor',
      title: 'Company',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          initialValue: 'Organization'
        }),
        defineField({
          name: 'name',
          title: 'Company Name',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string'
    }),
    defineField({
      name: 'telephone',
      title: 'Telephone',
      type: 'string'
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string'
    }),
    defineField({
      name: 'spouse',
      title: 'Spouse',
      type: 'string'
    }),
    defineField({
      name: 'parent',
      title: 'Parent',
      type: 'string'
    }),
    defineField({
      name: 'birthDate',
      title: 'Birth Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD'
      }
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          hidden: true,
          initialValue: 'PostalAddress'
        }),
        defineField({
          name: 'streetAddress',
          title: 'Street',
          type: 'string'
        }),
        defineField({
          name: 'addressLocality',
          title: 'City',
          type: 'string'
        }),
        defineField({
          name: 'addressRegion',
          title: 'State/Province/Region',
          type: 'string'
        }),
        defineField({
          name: 'postalCode',
          title: 'Postal Code',
          type: 'string'
        }),
        defineField({
          name: 'addressCountry',
          title: 'Country',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'sameAs',
      title: 'Social Profiles',
      description: 'Add social profile url on each field',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    id
  ],
  preview: {
    select: {
      name: 'name'
    },
    prepare(selection) {
      const { name } = selection;
      return {
        title: name || 'Untitled',
        subtitle: 'Person',
        media: MdPerson
      };
    }
  }
});

export default person;
