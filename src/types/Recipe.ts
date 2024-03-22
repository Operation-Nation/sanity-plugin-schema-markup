import { Image } from './Common';

export type Recipe = {
  type: string;
  id?: string;
  name?: string;
  image?: Image;
  description?: string;
  keywords?: string;
  author?: {
    type?: string;
    name?: string;
  };
  datePublished?: Date;
  prepTime?: string;
  cookTime?: string;
  totalTime?: string;
  recipeCategory?: string;
  recipeCuisine?: string;
  recipeYield?: string;
  nutrition?: {
    type?: string;
    servingSize?: string;
    calories?: string;
    fatContent?: string;
  };
  recipeIngredient?: string[];
  recipeInstructions?: Array<{
    type?: string;
    name?: string;
    text?: string;
    url?: string;
    image?: Image;
  }>;
  aggregateRating?: {
    type?: string;
    ratingValue?: string;
    bestRating?: string;
    worstRating?: string;
    ratingCount?: string;
    reviewCount?: string;
  };
  review?: Array<{
    _type?: string;
    type?: string;
    name?: string;
    reviewBody?: string;
    reviewRating?: {
      type?: string;
      ratingValue?: string;
      bestRating?: string;
      worstRating?: string;
    };
    datePublished?: Date;
    author?: { type?: string; name?: string };
    publisher?: { type?: string; name?: string };
  }>;
  video?: {
    type?: string;
    name?: string;
    description?: string;
    thumbnailUrl?: string[];
    uploadDate?: string;
    contentUrl?: string;
    embedUrl?: string;
  };
};
