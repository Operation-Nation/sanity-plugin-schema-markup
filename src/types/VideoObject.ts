import { Logo, PotentialAction } from './Common';

export type VideoObject = {
  type: string;
  id?: string;
  name?: string;
  description?: string;
  thumbnailUrl?: string[];
  uploadDate?: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
  potentialAction?: PotentialAction;
  publisher?: {
    type?: string;
    name?: string;
    logo?: Logo;
  };
};
