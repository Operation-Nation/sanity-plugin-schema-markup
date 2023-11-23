const howTo = {
  '@type': 'HowTo',
  '@id': 'string',
  name: 'string',
  description: 'string',
  image: 'url',
  totalTime: 'string',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'string',
    value: 'string'
  },
  supply: [
    {
      '@type': 'HowToSupply',
      name: 'string'
    }
  ],
  tool: [
    {
      '@type': 'HowToTool',
      name: 'string'
    }
  ],
  step: [
    {
      '@type': 'HowToStep',
      text: 'string',
      image: 'url',
      name: 'string',
      url: 'url'
    }
  ]
};

export default howTo;
