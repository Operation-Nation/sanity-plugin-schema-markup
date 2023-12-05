export type Product = {
  type: string;
  id: string;
  name: string;
  image: string;
  description: string;
  brand: {
    type: string;
    name: string;
  };
  sku: string;
  gtin8: string;
  gtin13: string;
  gtin14: string;
  mpn: string;
  offers: {
    type: string;
    url: string;
    priceCurrency: string;
    price: string;
    priceValidUntil: string;
    availability: string;
    itemCondition: string;
  };
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
};
