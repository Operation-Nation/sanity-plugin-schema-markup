export type Review = {
  type: string;
  id?: string;
  author?: {
    type?: string;
    name?: string;
  };
  itemReviewed?: {
    type?: string;
    name?: string;
  };
  reviewRating?: {
    type?: string;
    ratingValue?: string;
  };
  name?: string;
  reviewBody?: string;
  publisher?: {
    type?: string;
    name?: string;
  };
};
