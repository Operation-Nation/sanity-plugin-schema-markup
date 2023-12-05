export type Recipe = {
  type: string;
  id: string;
  name: string;
  image: [string, string];
  description: string;
  keywords: string;
  author: {
    type: string;
    name: string;
  };
  datePublished: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  recipeCategory: string;
  recipeCuisine: string;
  recipeYield: string;
  nutrition: {
    type: string;
    servingSize: string;
    calories: string;
    fatContent: string;
  };
  recipeIngredient: [string, string];
  recipeInstructions: [
    {
      type: string;
      name: string;
      text: string;
      url: string;
      image: string;
    }
  ];
  aggregateRating: {
    type: string;
    ratingValue: string;
    bestRating: string;
    worstRating: string;
    ratingCount: string;
    reviewCount: string;
  };
  review: [
    {
      type: string;
      name: string;
      reviewBody: string;
      reviewRating: {
        type: string;
        ratingValue: string;
        bestRating: string;
        worstRating: string;
      };
      datePublished: string;
      author: { type: string; name: string };
      publisher: { type: string; name: string };
    }
  ];
  video: {
    type: string;
    name: string;
    description: string;
    thumbnailUrl: [string, string];
    uploadDate: string;
    contentUrl: string;
    embedUrl: string;
  };
};
