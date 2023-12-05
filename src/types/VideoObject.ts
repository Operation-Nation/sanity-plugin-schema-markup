export type VideoObject = {
  type: string;
  id: string;
  name: string;
  description: string;
  thumbnailUrl: [string, string];
  uploadDate: string;
  duration: string;
  contentUrl: string;
  embedUrl: string;
  potentialAction: {
    type: string;
    target: string;
    'startOffset-input': string;
  };
  publisher: {
    type: string;
    name: string;
    logo: string;
  };
};
