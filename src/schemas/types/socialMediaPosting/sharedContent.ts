import { defineField } from 'sanity';
import id from '../../common/id';
import AuthorName from '../../../components/Article/AuthorName';

const sharedContent = defineField({
  name: 'sharedContent',
  title: 'Shared Content',
  description: 'Add multiple page with url',
  type: 'array',
  of: [
    {
      title: 'WebPage',
      name: 'webPage',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          hidden: true,
          initialValue: 'WebPage'
        }),
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string'
        }),
        defineField({
          name: 'url',
          title: 'Url',
          type: 'url'
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
            })
          ]
        }),
        id
      ]
    }
  ]
});

export default sharedContent;
