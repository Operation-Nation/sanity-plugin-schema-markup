import { defineType, defineField } from 'sanity';
import { MdOutlineWeb } from 'react-icons/md';
import id from '../../common/id';
import PageTypeListSelect from './PageTypeListSelect';
import Description from '../../../components/Webpage/Description';
import CompanyName from '../../../components/GlobalSetting/CompanyName';
import HeroImage from '../../../components/Webpage/HeroImage';
import Name from '../../../components/Webpage/Name';

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
      type: 'string',
      components: {
        input: Name
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      components: {
        input: Description
      }
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      components: {
        input: HeroImage
      }
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
          type: 'string',
          components: {
            input: CompanyName
          }
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
