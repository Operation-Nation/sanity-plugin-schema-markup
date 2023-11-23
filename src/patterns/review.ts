const review = {
  '@type': 'Review',
  '@id': 'string',
  author: {
    '@type': 'string',
    name: 'string'
  },
  itemReviewed: {
    '@type': 'string',
    name: 'string'
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '5'
  },
  name: 'string',
  reviewBody: 'string',
  publisher: {
    '@type': 'Organization',
    name: 'string'
  }
};

export default review;
