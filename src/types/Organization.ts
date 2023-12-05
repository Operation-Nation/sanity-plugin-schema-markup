export type Organization = {
  type: string;
  id: string;
  name: string;
  alternateName: string;
  url: string;
  logo: string;
  contactPoint: [
    {
      type: string;
      id: string;
      telephone: string;
      contactType: string;
      contactOption: [string, string];
      areaServed: [string, string];
      availableLanguage: [string, string];
    }
  ];
  sameAs: [string, string];
};
