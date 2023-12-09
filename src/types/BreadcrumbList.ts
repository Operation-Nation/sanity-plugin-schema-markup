export type BreadcrumbList = {
  type: string;
  id?: string;
  itemListElement?: Array<{
    type?: string;
    id?: string;
    position?: number;
    name?: string;
    item?: string;
  }>;
};
