export type FAQPage = {
  type: string;
  id?: string;
  mainEntity?: Array<{
    type?: string;
    name?: string;
    acceptedAnswer?: {
      type?: string;
      text?: string;
    };
  }>;
};
