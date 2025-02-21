import { defineType, defineField } from 'sanity';
import { PanelTop } from 'lucide-react';
import id from '../../common/id';
import PageTypeListSelect from './PageTypeListSelect';
import Description from '../../../components/Webpage/Description';
import CompanyName from '../../../components/GlobalSetting/CompanyName';
import HeroImage from '../../../components/Webpage/HeroImage';
import Name from '../../../components/Webpage/Name';

const webPage = (name = 'webPageType') => {
  return defineType({
    name,
    type: 'object',
    title: 'WebPage',
    icon: PanelTop,
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
        webPageName: 'name'
      },
      prepare(selection) {
        const { webPageName } = selection;
        return {
          title: webPageName || 'Untitled',
          subtitle: 'WebPage',
          media: PanelTop
        };
      }
    }
  });
};

export default webPage;
