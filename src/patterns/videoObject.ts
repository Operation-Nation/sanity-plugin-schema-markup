const videoObject = {
  '@type': 'VideoObject',
  '@id': 'string',
  name: 'string',
  description: 'string',
  thumbnailUrl: ['url', 'url'],
  uploadDate: 'date',
  duration: 'string',
  contentUrl: 'url',
  embedUrl: 'url',
  potentialAction: {
    '@type': 'SeekToAction',
    target: 'string={seek_to_second_number}',
    'startOffset-input': 'required name=seek_to_second_number'
  },
  publisher: {
    '@type': 'string',
    name: 'string',
    logo: 'url'
  }
};

export default videoObject;
