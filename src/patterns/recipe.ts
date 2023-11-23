const recipe = {
  '@type': 'Recipe',
  '@id': 'string',
  name: 'string',
  image: ['url', 'url'],
  description: 'string',
  keywords: 'string',
  author: {
    '@type': 'Person',
    name: 'string'
  },
  datePublished: '2023-11-08',
  prepTime: 'string',
  cookTime: 'string',
  totalTime: 'string',
  recipeCategory: 'string',
  recipeCuisine: 'string',
  recipeYield: 'string',
  nutrition: {
    '@type': 'NutritionInformation',
    servingSize: 'string',
    calories: 'string',
    fatContent: 'string'
  },
  recipeIngredient: ['string', 'string'],
  recipeInstructions: [
    {
      '@type': 'HowToStep',
      name: 'string',
      text: 'string',
      url: 'url',
      image: 'url'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 'string',
    bestRating: 'string',
    worstRating: 'string',
    ratingCount: 'string',
    reviewCount: 'string'
  },
  review: [
    {
      '@type': 'Review',
      name: 'string',
      reviewBody: 'string',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 'string',
        bestRating: 'string',
        worstRating: 'string'
      },
      datePublished: 'date',
      author: { '@type': 'Person', name: 'string' },
      publisher: { '@type': 'Organization', name: 'string' }
    }
  ],
  video: {
    '@type': 'VideoObject',
    name: 'string',
    description: 'string',
    thumbnailUrl: ['url', 'url'],
    uploadDate: 'date',
    contentUrl: 'url',
    embedUrl: 'url'
  }
};

export default recipe;
