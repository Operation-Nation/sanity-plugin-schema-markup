import { defineType, defineField } from 'sanity';
import { MdLanguage } from 'react-icons/md';
import id from '../../common/id';
import CompanyName from '../../../components/GlobalSetting/CompanyName';
import Domain from '../../../components/GlobalSetting/Domain';
import Logo from '../../../components/GlobalSetting/Logo';
import Description from '../../../components/Website/Description';

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
      type: 'string',
      components: {
        input: CompanyName
      }
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
      components: {
        input: Domain
      }
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      components: {
        input: Logo
      }
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
      type: 'text',
      components: {
        input: Description
      }
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
