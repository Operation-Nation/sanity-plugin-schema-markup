import { defineType, defineField } from 'sanity';
import { MdQueryStats } from 'react-icons/md';
import id from '../../common/id';

const service = defineType({
  name: 'serviceType',
  type: 'object',
  title: 'Service',
  icon: MdQueryStats,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      initialValue: 'Service'
    }),
    defineField({
      name: 'serviceType',
      title: 'Service Type',
      type: 'string'
    }),
    defineField({
      name: 'slogan',
      title: 'Slogan',
      type: 'string'
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'string'
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
      name: 'provider',
      title: 'Provider',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          initialValue: 'LocalBusiness'
        }),
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'areaServed',
      title: 'Area Served',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          initialValue: 'State'
        }),
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'hasOfferCatalog',
      title: 'Offer Catalog',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          initialValue: 'OfferCatalog'
        }),
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string'
        }),
        defineField({
          name: 'itemListElement',
          title: 'Item List Element',
          type: 'array',
          of: [
            {
              name: 'offerCatalog',
              title: 'Offer Catalog',
              type: 'object',
              fields: [
                defineField({
                  name: 'type',
                  title: 'Type',
                  type: 'string',
                  hidden: true,
                  initialValue: 'OfferCatalog'
                }),
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string'
                }),
                defineField({
                  name: 'itemListElement',
                  title: 'Item List Element',
                  type: 'array',
                  of: [
                    {
                      name: 'offer',
                      title: 'Offer',
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'type',
                          title: 'Type',
                          type: 'string',
                          hidden: true,
                          initialValue: 'Offer'
                        }),
                        defineField({
                          name: 'itemOffered',
                          title: 'Item Offered',
                          type: 'object',
                          fields: [
                            defineField({
                              name: 'type',
                              title: 'Type',
                              type: 'string',
                              hidden: true,
                              initialValue: 'Service'
                            }),
                            defineField({
                              name: 'name',
                              title: 'Name',
                              type: 'string'
                            })
                          ]
                        })
                      ]
                    }
                  ]
                })
              ]
            }
          ]
        })
      ]
    }),
    id
  ],
  preview: {
    select: {
      serviceType: 'serviceType'
    },
    prepare(selection) {
      const { serviceType } = selection;
      return {
        title: serviceType || 'Untitled',
        subtitle: 'Service',
        media: MdQueryStats
      };
    }
  }
});

export default service;
