const faqPage = {
  '@type': 'FAQPage',
  '@id': 'string',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'string',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'string'
      }
    },
    {
      '@type': 'Question',
      name: 'string',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'string'
      }
    }
  ]
};

export default faqPage;
