export type WebSite = {
  type: string;
  id: string;
  name: string;
  url: string;
  potentialAction: {
    type: string;
    target: string;
    'query-input': string;
  };
};
