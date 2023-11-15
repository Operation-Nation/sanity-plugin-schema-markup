import { defineField } from 'sanity';
import contactType from './list/contactType';
import id from '../../common/id';

const contactPoint = defineField({
  name: 'contactPoint',
  title: 'Contact Point',
  description: 'Add multiple contacts',
  type: 'array',
  of: [
    {
      title: 'contactPoint',
      name: 'contactPoint',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          hidden: true,
          initialValue: 'ContactPoint'
        }),
        defineField({
          name: 'telephone',
          title: 'Telephone',
          type: 'string'
        }),
        defineField({
          name: 'contactType',
          title: 'Contact Type',
          type: 'string',
          options: {
            list: contactType
          },
          initialValue: 'customer service'
        }),
        defineField({
          name: 'contactOption',
          title: 'Contact Option',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: [
              {
                title: 'Toll Free',
                value: 'TollFree'
              },
              {
                title: 'Hearing Impaired Supported',
                value: 'HearingImpairedSupported'
              }
            ]
          }
        }),
        defineField({
          name: 'areaServed',
          title: 'Area Served',
          description: 'Country name in ISO 3166-2 format. (e.g "US")',
          type: 'array',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'availableLanguage',
          title: 'Available Language',
          description: 'Language in short form  (e.g "en")',
          type: 'array',
          of: [{ type: 'string' }]
        }),
        id
      ]
    }
  ]
});

export default contactPoint;
