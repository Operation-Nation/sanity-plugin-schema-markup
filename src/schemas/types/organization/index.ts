import { defineType, defineField } from 'sanity';
import { Building } from 'lucide-react';
import contactPoint from './contactPoint';
import OrganizationListSelect from './OrganizationListSelect';
import id from '../../common/id';
import CompanyName from '../../../components/GlobalSetting/CompanyName';
import Domain from '../../../components/GlobalSetting/Domain';
import Logo from '../../../components/GlobalSetting/Logo';
import SocialLinks from '../../../components/GlobalSetting/SocialLinks';
import department from './department';

const organization = (name = 'organization') => {
  return defineType({
    name,
    type: 'object',
    title: 'Organization',
    icon: Building,
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
        organizationName: 'name'
      },
      prepare(selection) {
        const { organizationName } = selection;
        return {
          title: organizationName || 'Untitled',
          subtitle: 'Organization',
          media: Building
        };
      }
    }
  });
};

export default organization;
