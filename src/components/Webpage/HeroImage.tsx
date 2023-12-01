import { ObjectInputProps, useFormValue, set, useClient } from 'sanity';
import { Stack } from '@sanity/ui';
import { useState, useEffect } from 'react';

type ImageType = {
  _type?: string;
  asset?: {
    _ref?: string;
    _type?: string;
  };
};

type HeroProps = {
  _type?: string;
  _ref?: string;
};

const HeroImage = (props: ObjectInputProps) => {
  const { renderDefault, onChange, value } = props;
  const hero = useFormValue(['hero']) as HeroProps;
  const [heroImage, setHeroImage] = useState<ImageType | undefined>(undefined);
  const client = useClient({ apiVersion: '2021-06-07' });
  useEffect(() => {
    const fetchData = async (ref: string) => {
      await client
        .fetch("*[_type=='hero' && _id==$ref][0]{'image': contentMediaSplit.image}", { ref })
        .then(data => setHeroImage(data?.image));
    };
    if (hero?._ref) {
      fetchData(hero._ref);
    }
  }, [hero, client]);
  useEffect(() => {
    if (heroImage && typeof heroImage === 'object' && !value) {
      const createImageRefs = {
        _type: 'image',
        asset: {
          _ref: heroImage?.asset?._ref,
          _type: 'reference'
        }
      };
      onChange(set(createImageRefs));
    }
  }, [heroImage, value, onChange]);

  return <Stack>{renderDefault(props)}</Stack>;
};
export default HeroImage;
