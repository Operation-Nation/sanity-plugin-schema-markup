const organization = {
  '@type': 'string',
  '@id': 'string',
  name: 'string',
  alternateName: 'string',
  url: 'string',
  logo: 'string',
  contactPoint: [
    {
      '@type': 'string',
      '@id': 'string',
      telephone: 'string',
      contactType: 'string',
      contactOption: ['string', 'string'],
      areaServed: ['string', 'string'],
      availableLanguage: ['string', 'string']
    }
  ],
  department: [
    {
      '@type': 'string',
      '@id': 'string',
      name: 'string',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'string',
        addressLocality: 'string',
        addressRegion: 'string',
        postalCode: 'string',
        addressCountry: 'string'
      }
    }
  ],
  sameAs: ['string', 'string']
};

export default organization;
