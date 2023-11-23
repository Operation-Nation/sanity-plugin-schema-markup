import { defineType, defineField } from 'sanity';
import { MdLanguage } from 'react-icons/md';
import id from '../../common/id';

const website = defineType({
  name: 'websiteType',
  type: 'object',
  title: 'Website',
  icon: MdLanguage,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      hidden: true,
      initialValue: 'WebSite'
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
      name: 'image',
      title: 'Image',
      type: 'image'
    }),
    defineField({
      name: 'potentialAction',
      title: 'Potential Action',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          initialValue: 'SearchAction'
        }),
        defineField({
          name: 'searchUrl',
          title: 'Internal site search URL',
          type: 'url'
        }),
        defineField({
          name: 'optionalString',
          title: 'Optional string after the query',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
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
        subtitle: 'Website',
        media: MdLanguage
      };
    }
  }
});

export default website;
