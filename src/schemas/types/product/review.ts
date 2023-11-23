import { defineField } from 'sanity';
import id from '../../common/id';

const review = defineField({
  name: 'review',
  title: 'Review',
  type: 'array',
  of: [
    defineField({
      name: 'productReviewType',
      type: 'object',
      title: 'Review',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          initialValue: 'Review'
        }),
        defineField({
          name: 'name',
          title: 'Review Name',
          type: 'string'
        }),
        defineField({
          name: 'reviewBody',
          title: 'Review Body',
          type: 'text'
        }),
        defineField({
          name: 'datePublished',
          title: 'Date Published',
          type: 'date'
        }),
        defineField({
          name: 'author',
          title: 'Author',
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              initialValue: 'Person'
            }),
            defineField({
              name: 'name',
              title: 'Author Name',
              type: 'string'
            })
          ]
        }),
        defineField({
          name: 'reviewRating',
          title: 'Review Rating',
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              hidden: true,
              initialValue: 'Rating'
            }),
            defineField({
              name: 'ratingValue',
              title: 'Rating',
              type: 'string'
            })
          ]
        }),
        defineField({
          name: 'publisher',
          title: 'Publisher',
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
            })
          ]
        }),
        id
      ]
    })
  ]
});

export default review;
