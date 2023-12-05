export type HowTo = {
  type: string;
  id: string;
  name: string;
  description: string;
  image: string;
  totalTime: string;
  estimatedCost: {
    type: string;
    currency: string;
    value: string;
  };
  supply: [
    {
      type: string;
      name: string;
    }
  ];
  tool: [
    {
      type: string;
      name: string;
    }
  ];
  step: [
    {
      type: string;
      text: string;
      image: string;
      name: string;
      url: string;
    }
  ];
};
