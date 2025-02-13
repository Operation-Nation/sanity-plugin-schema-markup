import { defineType, defineField } from 'sanity';
import { Star } from 'lucide-react';
import id from '../../common/id';
import ItemReviewedListSelect from './ItemReviewedListSelect';

const review = (name = 'reviewType') => {
  return defineType({
    name,
    type: 'object',
    title: 'Review',
    icon: Star,
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
        name: 'itemReviewed',
        title: 'Item Reviewed',
        type: 'object',
        fields: [
          defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            components: {
              input: ItemReviewedListSelect
            },
            initialValue: 'Product'
          }),
          defineField({
            name: 'name',
            title: 'Item Name',
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
    ],
    preview: {
      select: {
        name: 'name'
      },
      prepare() {
        return {
          title: name || 'Untitled',
          subtitle: 'Review',
          media: Star
        };
      }
    }
  });
};

export default review;
