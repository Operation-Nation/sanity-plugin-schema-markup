import { defineType, defineField } from 'sanity';
import { MdOutlineQuestionAnswer } from 'react-icons/md';
import id from '../../common/id';

const faqPage = defineType({
  name: 'faqPageType',
  type: 'object',
  title: 'FAQ Page',
  icon: MdOutlineQuestionAnswer,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      hidden: true,
      initialValue: 'FAQPage'
    }),
    defineField({
      name: 'mainEntity',
      title: 'FAQ List',
      type: 'array',
      of: [
        defineField({
          name: 'question',
          title: 'Question',
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              hidden: true,
              initialValue: 'Question'
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string'
            }),
            defineField({
              name: 'acceptedAnswer',
              title: 'Accepted Answer',
              type: 'object',
              fields: [
                defineField({
                  name: 'type',
                  title: 'Type',
                  type: 'string',
                  hidden: true,
                  initialValue: 'Answer'
                }),
                defineField({
                  name: 'text',
                  title: 'Text',
                  type: 'text'
                })
              ]
            })
          ]
        })
      ]
    }),
    id
  ],
  preview: {
    select: {
      mainEntity: 'mainEntity'
    },
    prepare(selection) {
      const { mainEntity } = selection;
      return {
        title: mainEntity && mainEntity.length > 0 ? `FAQs-${mainEntity.length}` : 'No FAQ',
        subtitle: 'FAQ Page',
        media: MdOutlineQuestionAnswer
      };
    }
  }
});

export default faqPage;
