import { defineType, defineField } from 'sanity';
import { MdOutlineShare } from 'react-icons/md';
import id from '../../common/id';
import Headline from '../../../components/Article/Headline';
import Description from '../../../components/Article/Description';
import AuthorName from '../../../components/Article/AuthorName';
import AuthorUrl from '../../../components/Article/AuthorUrl';
import DatePublished from '../../../components/Article/DatePublished';
import DateModified from '../../../components/Article/DateModified';
import HeroImage from '../../../components/Article/HeroImage';
import CompanyName from '../../../components/GlobalSetting/CompanyName';
import Logo from '../../../components/GlobalSetting/Logo';
import sharedContent from './sharedContent';

const socialMediaPosting = defineType({
  name: 'socialMediaPosting',
  type: 'object',
  title: 'Social Media Posting',
  icon: MdOutlineShare,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      initialValue: 'SocialMediaPosting'
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      components: {
        input: Headline
      }
    }),
    defineField({
      name: 'description',
      title: 'Short Description of the Article',
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
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          options: {
            list: [
              {
                title: 'Person',
                value: 'Person'
              },
              {
                title: 'Organization',
                value: 'Organization'
              }
            ]
          },
          initialValue: 'Person'
        }),
        id,
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
          components: {
            input: AuthorName
          }
        }),
        defineField({
          name: 'url',
          title: 'Url',
          type: 'url',
          components: {
            input: AuthorUrl
          }
        })
      ]
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
          hidden: true,
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
      name: 'datePublished',
      title: 'Date Published',
      type: 'datetime',
      components: {
        input: DatePublished
      },
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15
      }
    }),
    defineField({
      name: 'dateModified',
      title: 'Date Modified',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15
      },
      components: {
        input: DateModified
      }
    }),
    sharedContent,
    id
  ],
  preview: {
    select: {
      headline: 'headline'
    },
    prepare(selection) {
      const { headline } = selection;
      return {
        title: headline || 'Untitled',
        subtitle: 'Social Media Posting',
        media: MdOutlineShare
      };
    }
  }
});

export default socialMediaPosting;
