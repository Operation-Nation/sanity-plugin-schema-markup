export type Logo =
  | string
  | {
      _type?: string;
      asset?: {
        _ref?: string;
      };
    };

type SanityImage = {
  _type?: string;
  asset?: {
    _ref?: string;
  };
};

export type Image = string | string[] | SanityImage | SanityImage[];

export type PotentialAction =
  | string
  | {
      type?: string;
      target?: string;
      'query-input'?: string;
      'startOffset-input'?: string;
    };
