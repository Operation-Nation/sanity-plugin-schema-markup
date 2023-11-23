import { defineType, defineField } from 'sanity';
import { MdImage } from 'react-icons/md';
import id from '../../common/id';

const imageObject = defineType({
  name: 'imageObjectType',
  type: 'object',
  title: 'Image Object',
  icon: MdImage,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      hidden: true,
      initialValue: 'ImageObject'
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string'
    }),
    defineField({
      name: 'contentUrl',
      title: 'Content Url',
      type: 'url'
    }),
    defineField({
      name: 'contentLocation',
      title: 'Content Location',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
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
      type: 'string'
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
        subtitle: 'ImageObject',
        media: MdImage
      };
    }
  }
});

export default imageObject;
