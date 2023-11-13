const localBusiness = {
  '@type': 'string',
  name: 'string',
  image: 'string',
  '@id': 'string',
  url: 'string',
  telephone: 'string',
  priceRange: 'string',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'string',
    addressLocality: 'string',
    addressRegion: 'string',
    postalCode: 'string',
    addressCountry: 'string'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0.0,
    longitude: 0.0
  },
  hasMap: 'string',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['string', 'string'],
      opens: 'string',
      closes: 'string'
    }
  ],
  sameAs: ['string', 'string']
};

export default localBusiness;
