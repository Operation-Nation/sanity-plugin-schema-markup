export type WebPage = {
  type: string;
  id: string;
  name: string;
  description: string;
  image: string;
  breadcrumb: string;
  publisher: {
    type: string;
    name: string;
  };
  license: string;
};
