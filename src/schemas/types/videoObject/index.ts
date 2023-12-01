import { defineType, defineField } from 'sanity';
import { MdVideoCameraBack } from 'react-icons/md';
import id from '../../common/id';
import CompanyName from '../../../components/GlobalSetting/CompanyName';
import Logo from '../../../components/GlobalSetting/Logo';

const videoObject = defineType({
  name: 'videoObjectType',
  type: 'object',
  title: 'Video Object',
  icon: MdVideoCameraBack,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      hidden: true,
      initialValue: 'VideoObject'
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
      name: 'thumbnailUrl',
      title: 'Thumbnail Url',
      type: 'array',
      of: [{ type: 'url' }]
    }),
    defineField({
      name: 'uploadDate',
      title: 'Upload Date',
      type: 'date'
    }),
    defineField({
      name: 'contentUrl',
      title: 'Content Url',
      type: 'url'
    }),
    defineField({
      name: 'embedUrl',
      title: 'Embed Url',
      type: 'url'
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
          type: 'string',
          components: {
            input: CompanyName
          }
        }),
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'image',
          components: {
            input: Logo
          }
        })
      ]
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
          initialValue: 'SeekToAction'
        }),
        defineField({
          name: 'seekToActionTargetUrl',
          title: 'SeekToAction Target URL',
          type: 'url'
        })
      ]
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
        subtitle: 'VideoObject',
        media: MdVideoCameraBack
      };
    }
  }
});

export default videoObject;
