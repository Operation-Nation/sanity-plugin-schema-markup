import { Image } from './Common';

export type HowTo = {
  type: string;
  id?: string;
  name?: string;
  description?: string;
  image?: Image;
  totalTime?: string;
  estimatedCost?: {
    type?: string;
    currency?: string;
    value?: string;
  };
  supply?: Array<{
    type?: string;
    name?: string;
  }>;
  tool?: Array<{
    type?: string;
    name?: string;
  }>;
  step?: Array<{
    type?: string;
    text?: string;
    image?: Image;
    name?: string;
    url?: string;
  }>;
};
