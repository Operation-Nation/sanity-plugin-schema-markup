export type Service = {
  type: string;
  id: string;
  serviceType: string;
  provider: {
    type: string;
    name: string;
  };
  areaServed: {
    type: string;
    name: string;
  };
  hasOfferCatalog: {
    type: string;
    name: string;
    itemListElement: [
      {
        type: string;
        name: string;
        itemListElement: [
          {
            type: string;
            itemOffered: {
              type: string;
              name: string;
            };
          },
          {
            type: string;
            itemOffered: {
              type: string;
              name: string;
            };
          }
        ];
      }
    ];
  };
};
