import { defineType, defineField } from 'sanity';
import { MdOutlineLan } from 'react-icons/md';
import contactPoint from './contactPoint';
import OrganizationListSelect from './OrganizationListSelect';
import id from '../../common/id';
import CompanyName from '../../../components/GlobalSetting/CompanyName';
import Domain from '../../../components/GlobalSetting/Domain';
import Logo from '../../../components/GlobalSetting/Logo';
import SocialLinks from '../../../components/GlobalSetting/SocialLinks';
import department from './department';

const organization = defineType({
  name: 'organization',
  type: 'object',
  title: 'Organization',
  icon: MdOutlineLan,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      components: {
        input: OrganizationListSelect
      },
      initialValue: 'Organization'
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
      name: 'alternateName',
      title: 'Alternate Name',
      type: 'string'
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
      name: 'logo',
      title: 'Logo',
      type: 'image',
      components: {
        input: Logo
      }
    }),
    contactPoint,
    department,
    defineField({
      name: 'sameAs',
      title: 'Social Profiles',
      description: 'Add social profile url on each field',
      type: 'array',
      of: [{ type: 'string' }],
      components: {
        input: SocialLinks
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
        subtitle: 'Organization',
        media: MdOutlineLan
      };
    }
  }
});

export default organization;
