import { defineType, defineField } from 'sanity';
import ArticleListSelect from './ArticleListSelect';

const article = defineType({
  name: 'article',
  type: 'object',
  title: 'Article',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      components: {
        input: ArticleListSelect
      },
      initialValue: 'Article'
    }),
    defineField({
      name: 'id',
      title: 'Id',
      type: 'string'
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Short Description of the Article',
      type: 'text'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'url' }]
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
                title: 'Organisation',
                value: 'Organisation'
              }
            ]
          },
          initialValue: 'Person'
        }),
        defineField({
          name: 'id',
          title: 'Id',
          type: 'string'
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
        defineField({
          name: 'id',
          title: 'Id',
          type: 'string'
        }),
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string'
        }),
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'url'
        })
      ]
    }),
    defineField({
      name: 'datePublished',
      title: 'Date Published',
      type: 'datetime',
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
      }
    })
  ]
});

export default article;
