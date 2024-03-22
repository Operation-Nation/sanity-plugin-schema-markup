import { Image } from './Common';

export type Product = {
  type: string;
  id?: string;
  name?: string;
  image?: Image;
  description?: string;
  brand?: {
    type?: string;
    name?: string;
  };
  sku?: string;
  gtin8?: string;
  gtin13?: string;
  gtin14?: string;
  mpn?: string;
  offers?: {
    type?: string;
    url?: string;
    priceCurrency?: string;
    price?: string;
    priceValidUntil?: string;
    availability?: string;
    itemCondition?: string;
  };
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
};
