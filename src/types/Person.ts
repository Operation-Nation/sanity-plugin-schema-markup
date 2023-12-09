import { Image } from './Common';

export type Person = {
  type: string;
  id?: string;
  name?: string;
  url?: string;
  image?: Image;
  jobTitle?: string;
  description?: string;
  email?: string;
  telephone?: string;
  birthDate?: string;
  gender?: string;
  spouse?: string;
  parent?: string;
  worksFor?: {
    type?: string;
    name?: string;
  };
  address?: {
    type?: string;
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  sameAs?: string[];
};
