import { defineField } from 'sanity';
import id from '../../common/id';

const itemListElement = defineField({
  name: 'itemListElement',
  title: 'Item List Element',
  description: 'Add multiple page with url',
  type: 'array',
  of: [
    {
      title: 'ListItem',
      name: 'listItem',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          hidden: true,
          initialValue: 'ListItem'
        }),
        defineField({
          name: 'name',
          title: 'Page',
          type: 'string'
        }),
        defineField({
          name: 'item',
          title: 'Url',
          type: 'url'
        }),
        id
      ]
    }
  ]
});

export default itemListElement;
