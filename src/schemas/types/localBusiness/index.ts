import { defineType, defineField } from 'sanity';
import LocalBusinessListSelect from './LocalBusinessListSelect';
import openingHoursSpecification from './openingHoursSpecification';
import id from '../../common/id';

const localBusiness = defineType({
  name: 'localBusiness',
  type: 'object',
  title: 'Local Business',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      components: {
        input: LocalBusinessListSelect
      },
      initialValue: 'ProfessionalService'
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
      name: 'logo',
      title: 'Logo',
      type: 'image'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image'
    }),
    defineField({
      name: 'priceRange',
      title: 'Price Range',
      type: 'string'
    }),
    defineField({
      name: 'telephone',
      title: 'Telephone',
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
    defineField({
      name: 'geo',
      title: 'Geo',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          hidden: true,
          initialValue: 'GeoCoordinates'
        }),
        defineField({
          name: 'latitude',
          title: 'Latitude',
          type: 'string'
        }),
        defineField({
          name: 'longitude',
          title: 'Longitude',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'hasMap',
      title: 'Include a map url',
      type: 'url'
    }),
    openingHoursSpecification,
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

export default localBusiness;
