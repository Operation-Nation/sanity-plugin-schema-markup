import { defineType, defineField } from 'sanity';
import { MdOutlineShoppingBag } from 'react-icons/md';
import id from '../../common/id';
import review from './review';

const product = defineType({
  name: 'productType',
  type: 'object',
  title: 'Product',
  icon: MdOutlineShoppingBag,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      hidden: true,
      initialValue: 'Product'
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          initialValue: 'Brand'
        }),
        defineField({
          name: 'name',
          title: 'Brand Name',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'sku',
      title: 'Sku',
      type: 'string'
    }),
    defineField({
      name: 'gtin8',
      title: 'Gtin8',
      type: 'string'
    }),
    defineField({
      name: 'gtin13',
      title: 'Gtin13',
      type: 'string'
    }),
    defineField({
      name: 'gtin14',
      title: 'Gtin14',
      type: 'string'
    }),
    defineField({
      name: 'mpn',
      title: 'Mpn',
      type: 'string'
    }),
    defineField({
      name: 'offers',
      title: 'Offers',
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
          name: 'priceCurrency',
          title: 'Price Currency',
          type: 'string'
        }),
        defineField({
          name: 'price',
          title: 'Price',
          type: 'string'
        }),
        defineField({
          name: 'priceValidUntil',
          title: 'Price Valid Until',
          type: 'date'
        }),
        defineField({
          name: 'availability',
          title: 'Availability',
          type: 'url',
          initialValue: 'https://schema.org/InStock'
        }),
        defineField({
          name: 'itemCondition',
          title: 'Item Condition',
          type: 'url',
          initialValue: 'https://schema.org/NewCondition'
        })
      ]
    }),
    defineField({
      name: 'aggregateRating',
      title: 'Aggregate Rating',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          initialValue: 'AggregateRating'
        }),
        defineField({
          name: 'bestRating',
          title: 'Highest Rating',
          type: 'string'
        }),
        defineField({
          name: 'worstRating',
          title: 'Lowest Rating',
          type: 'string'
        })
      ]
    }),
    review,
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
        subtitle: 'Product',
        media: MdOutlineShoppingBag
      };
    }
  }
});

export default product;
