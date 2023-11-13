import { defineField } from 'sanity';

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
          // hidden: true,
          initialValue: 'ListItem'
        }),
        defineField({
          name: 'id',
          title: 'Id',
          type: 'string'
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
        })
      ]
    }
  ]
});

export default itemListElement;
