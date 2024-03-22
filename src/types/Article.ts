import { Logo, Image } from './Common';

export type Article = {
  type: string;
  id?: string;
  publisher?: {
    name?: string;
    logo?: Logo;
    type?: string;
    id?: string;
  };
  headline?: string;
  datePublished?: Date;
  image?: Image;
  author?: {
    name?: string;
    url?: string;
    type?: string;
    id?: string;
  };
  description?: string;
  dateModified?: Date;
};
