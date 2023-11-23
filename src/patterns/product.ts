const product = {
  '@type': 'Product',
  '@id': 'string',
  name: 'string',
  image: 'string',
  description: 'string',
  brand: {
    '@type': 'Brand',
    name: 'string'
  },
  sku: 'string',
  gtin8: 'string',
  gtin13: 'string',
  gtin14: 'string',
  mpn: 'string',
  offers: {
    '@type': 'Offer',
    url: 'string',
    priceCurrency: 'string',
    price: 'string',
    priceValidUntil: 'date',
    availability: 'url',
    itemCondition: 'url'
  },
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
  ]
};
export default product;
