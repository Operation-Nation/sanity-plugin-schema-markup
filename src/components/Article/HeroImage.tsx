import { ObjectInputProps, useFormValue, set } from 'sanity';
import { Stack } from '@sanity/ui';
import { useEffect } from 'react';

const HeroImage = (props: ObjectInputProps) => {
  const { renderDefault, onChange, value } = props;
  const heroImage = useFormValue(['mainImage']);
  useEffect(() => {
    if (heroImage && !value) {
      const createImageRefs = {
        _type: 'image',
        asset: {
          _ref: heroImage.asset._ref,
          _type: 'reference'
        }
      };
      onChange(set(createImageRefs));
    }
  }, [heroImage, value, onChange]);

  return <Stack>{renderDefault(props)}</Stack>;
};
export default HeroImage;
