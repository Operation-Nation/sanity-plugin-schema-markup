const service = {
  '@type': 'Service',
  '@id': 'string',
  serviceType: 'string',
  provider: {
    '@type': 'string',
    name: 'string'
  },
  areaServed: {
    '@type': 'State',
    name: 'string'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'string',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'string',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'string'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'string'
            }
          }
        ]
      }
    ]
  }
};

export default service;
