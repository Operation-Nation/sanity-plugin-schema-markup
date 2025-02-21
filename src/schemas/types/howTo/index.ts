import { defineType, defineField } from 'sanity';
import { FlaskConical } from 'lucide-react';
import id from '../../common/id';

const howTo = (name = 'howToType') => {
  return defineType({
    name,
    type: 'object',
    title: 'How To',
    icon: FlaskConical,
    fields: [
      defineField({
        name: 'type',
        title: 'Type',
        type: 'string',
        hidden: true,
        initialValue: 'HowTo'
      }),
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string'
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image'
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'string'
      }),

      defineField({
        name: 'totalTime',
        title: 'Total Time (min)',
        description: 'i.e 40 min = PT40M',
        type: 'string'
      }),
      defineField({
        name: 'estimatedCost',
        title: 'Estimated Cost',
        type: 'object',
        fields: [
          defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            initialValue: 'MonetaryAmount'
          }),
          defineField({
            name: 'currency',
            title: 'Currency',
            description: 'i.e. USD',
            type: 'string'
          }),
          defineField({
            name: 'value',
            title: 'Value',
            type: 'string'
          })
        ]
      }),
      defineField({
        name: 'supply',
        title: 'Supply',
        type: 'array',
        of: [
          defineField({
            name: 'howToSupply',
            title: 'How To Supply',
            type: 'object',
            fields: [
              defineField({
                name: 'type',
                title: 'Type',
                type: 'string',
                hidden: true,
                initialValue: 'HowToSupply'
              }),
              defineField({
                name: 'name',
                title: 'Name',
                type: 'string'
              })
            ]
          })
        ]
      }),
      defineField({
        name: 'tool',
        title: 'Tool',
        type: 'array',
        of: [
          defineField({
            name: 'howToTool',
            title: 'How To Tool',
            type: 'object',
            fields: [
              defineField({
                name: 'type',
                title: 'Type',
                type: 'string',
                hidden: true,
                initialValue: 'HowToTool'
              }),
              defineField({
                name: 'name',
                title: 'Name',
                type: 'string'
              })
            ]
          })
        ]
      }),
      defineField({
        name: 'step',
        title: 'Step',
        type: 'array',
        of: [
          defineField({
            name: 'howToStep',
            title: 'How To Step',
            type: 'object',
            fields: [
              defineField({
                name: 'type',
                title: 'Type',
                type: 'string',
                hidden: true,
                initialValue: 'HowToStep'
              }),
              defineField({
                name: 'name',
                title: 'Name',
                type: 'string'
              }),
              defineField({
                name: 'text',
                title: 'Description',
                type: 'string'
              }),
              defineField({
                name: 'url',
                title: 'Url',
                type: 'url'
              })
            ]
          })
        ]
      }),
      id
    ],
    preview: {
      select: {
        howToName: 'name'
      },
      prepare(selection) {
        const { howToName } = selection;
        return {
          title: howToName || 'Untitled',
          subtitle: 'HowTo',
          media: FlaskConical
        };
      }
    }
  });
};

export default howTo;
