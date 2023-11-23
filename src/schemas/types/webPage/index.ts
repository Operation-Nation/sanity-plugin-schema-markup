import { defineType, defineField } from 'sanity';
import { MdOutlineWeb } from 'react-icons/md';
import id from '../../common/id';
import PageTypeListSelect from './PageTypeListSelect';

const webPage = defineType({
  name: 'webPageType',
  type: 'object',
  title: 'WebPage',
  icon: MdOutlineWeb,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      components: {
        input: PageTypeListSelect
      },
      initialValue: 'WebPage'
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image'
    }),
    defineField({
      name: 'breadcrumb',
      title: 'Breadcrumb',
      type: 'string'
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
          initialValue: 'Organization'
        }),
        id,
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'license',
      title: 'License',
      type: 'url'
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
        subtitle: 'WebPage',
        media: MdOutlineWeb
      };
    }
  }
});

export default webPage;
