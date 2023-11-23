import { defineType, defineField } from 'sanity';
import { MdOutlineDinnerDining } from 'react-icons/md';
import id from '../../common/id';
import review from '../product/review';

const recipe = defineType({
  name: 'recipeType',
  type: 'object',
  title: 'Recipe',
  icon: MdOutlineDinnerDining,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      hidden: true,
      initialValue: 'Recipe'
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'string'
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
          initialValue: 'Person'
        }),
        defineField({
          name: 'name',
          title: 'Author Name',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'datePublished',
      title: 'Date Published',
      type: 'date'
    }),
    defineField({
      name: 'prepTime',
      title: 'Preparation (min)',
      description: 'i.e 30 min = PT30M',
      type: 'string'
    }),
    defineField({
      name: 'cookTime',
      title: 'Cooking (min)',
      description: 'i.e 40 min = PT40M',
      type: 'string'
    }),
    defineField({
      name: 'totalTime',
      title: 'Total Time (min)',
      description: 'prepTime + cookTime  = PT70M',
      type: 'string'
    }),
    defineField({
      name: 'recipeCategory',
      title: 'Recipe Category',
      type: 'string'
    }),
    defineField({
      name: 'recipeCuisine',
      title: 'Recipe Cuisine',
      type: 'string'
    }),
    defineField({
      name: 'recipeYield',
      title: 'Recipe Yield',
      type: 'string'
    }),
    defineField({
      name: 'nutrition',
      title: 'Nutrition',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          initialValue: 'NutritionInformation'
        }),
        defineField({
          name: 'servingSize',
          title: 'ServingSize',
          type: 'string'
        }),
        defineField({
          name: 'calories',
          title: 'Calories',
          description: 'i.e. 100 cal',
          type: 'string'
        }),
        defineField({
          name: 'fatContent',
          title: 'Fat Content',
          description: 'i.e. 30 g',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'recipeIngredient',
      title: 'Recipe Ingredients',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'recipeInstructions',
      title: 'Recipe Instructions',
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
              title: 'Author Name',
              type: 'string'
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'text'
            }),
            defineField({
              name: 'url',
              title: 'Url',
              type: 'url'
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image'
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'aggregateRating',
      title: 'Aggregate Rating',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          initialValue: 'AggregateRating'
        }),
        defineField({
          name: 'bestRating',
          title: 'Highest Rating',
          type: 'string'
        }),
        defineField({
          name: 'worstRating',
          title: 'Lowest Rating',
          type: 'string'
        })
      ]
    }),
    review,
    defineField({
      name: 'video',
      title: 'Video',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          initialValue: 'VideoObject'
        }),
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string'
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
        }),
        defineField({
          name: 'thumbnailUrl',
          title: 'Thumbnail Url',
          type: 'array',
          of: [{ type: 'url' }]
        }),
        defineField({
          name: 'uploadDate',
          title: 'Upload Date',
          type: 'date'
        }),
        defineField({
          name: 'contentUrl',
          title: 'Content Url',
          type: 'url'
        }),
        defineField({
          name: 'embedUrl',
          title: 'Embed Url',
          type: 'url'
        })
      ]
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
        subtitle: 'Recipe',
        media: MdOutlineDinnerDining
      };
    }
  }
});

export default recipe;
