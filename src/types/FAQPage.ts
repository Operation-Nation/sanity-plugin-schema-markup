export type FAQPage = {
  type: string;
  id?: string;
  mainEntity?: Arrya<{
    type?: string;
    name?: string;
    acceptedAnswer?: {
      type?: string;
      text?: string;
    };
  }>;
};
