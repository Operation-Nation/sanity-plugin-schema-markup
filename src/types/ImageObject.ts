export type ImageObject = {
  type: string;
  id?: string;
  author?: {
    name?: string;
    url?: string;
    type?: string;
    id?: string;
  };
  contentLocation?: string;
  contentUrl?: string;
  datePublished?: Date;
  description?: string;
  name?: string;
  caption?: string;
};
