import {defineField} from 'sanity'
import contactType from './list/contactType'
import areaServed from './list/areaServed'
import availableLanguage from './list/availableLanguage'

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
          initialValue: 'ContactPoint',
        }),
        defineField({
          name: 'telephone',
          title: 'Telephone',
          type: 'string',
        }),
        defineField({
          name: 'contactType',
          title: 'Contact Type',
          type: 'string',
          options: {
            list: contactType,
          },
          initialValue: 'customer service',
        }),
        defineField({
          name: 'contactOption',
          title: 'Contact Option',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {
                title: 'Toll Free',
                value: 'TollFree',
              },
              {
                title: 'Hearing Impaired Supported',
                value: 'HearingImpairedSupported',
              },
            ],
          },
        }),
        defineField({
          name: 'areaServed',
          title: 'Area Served',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            layout: 'grid',
            list: areaServed,
            modal: {type: 'dialog', width: 'auto'},
          },
        }),
        defineField({
          name: 'availableLanguage',
          title: 'Available Language',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            layout: 'grid',
            list: availableLanguage,
            modal: {type: 'dialog', width: 'auto'},
          },
        }),
      ],
    },
  ],
})

export default contactPoint
