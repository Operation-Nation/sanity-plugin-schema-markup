const website = {
  '@type': 'WebSite',
  '@id': 'string',
  name: 'string',
  url: 'string',
  potentialAction: {
    '@type': 'SearchAction',
    target: '{search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export default website;
