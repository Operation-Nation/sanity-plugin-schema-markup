import { defineField } from 'sanity';
import id from '../../common/id';

const department = defineField({
  name: 'department',
  title: 'Department',
  description: 'Add multiple departments',
  type: 'array',
  of: [
    {
      title: 'department',
      name: 'department',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          hidden: true,
          initialValue: 'Organization'
        }),
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string'
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
        id
      ]
    }
  ]
});

export default department;
