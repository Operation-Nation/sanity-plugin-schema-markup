const person = {
  '@type': 'string',
  '@id': 'string',
  name: 'string',
  url: 'string',
  image: 'string',
  jobTitle: 'string',
  description: 'string',
  email: 'string',
  telephone: 'string',
  birthDate: 'string',
  gender: 'string',
  spouse: 'string',
  parent: 'string',
  worksFor: {
    '@type': 'Organization',
    name: 'string'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'string',
    addressLocality: 'string',
    addressRegion: 'string',
    postalCode: 'string',
    addressCountry: 'string'
  },
  sameAs: ['string', 'string']
};

export default person;
