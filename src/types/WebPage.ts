import { Image } from './Common';

export type WebPage = {
  type: string;
  id?: string;
  name?: string;
  description?: string;
  image?: Image;
  breadcrumb?: string;
  publisher?: {
    type?: string;
    name?: string;
  };
  license?: string;
};
