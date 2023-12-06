import { PotentialAction } from './Common';

export type WebSite = {
  type: string;
  id?: string;
  name?: string;
  url?: string;
  potentialAction?: PotentialAction;
};
