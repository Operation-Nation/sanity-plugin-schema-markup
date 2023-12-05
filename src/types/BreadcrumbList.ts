export type BreadcrumbList = {
  type: string;
  id: string;
  itemListElement: [
    {
      type: string;
      id: string;
      position: number;
      name: string;
      item: string;
    },
    {
      type: string;
      id: string;
      position: number;
      name: string;
      item: string;
    }
  ];
};
