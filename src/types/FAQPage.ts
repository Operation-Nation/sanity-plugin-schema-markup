export type FAQPage = {
  type: string;
  id: string;
  mainEntity: [
    {
      type: string;
      name: string;
      acceptedAnswer: {
        type: string;
        text: string;
      };
    },
    {
      type: string;
      name: string;
      acceptedAnswer: {
        type: string;
        text: string;
      };
    }
  ];
};
