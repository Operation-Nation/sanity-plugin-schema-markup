import { ArrayOfObjectsInputProps, useFormValue, set } from 'sanity';
import { Stack } from '@sanity/ui';
import { useEffect } from 'react';
import { randomKey } from '@sanity/util/content';

const Images = (props: ArrayOfObjectsInputProps) => {
  const { renderDefault, onChange, value } = props;
  const heroImage = useFormValue(['mainImage']);
  const body = useFormValue(['body']);
  const bodyImages = body.filter(item => item._type === 'mainImage');
  const images = [heroImage, ...bodyImages].filter(item => !!item);
  useEffect(() => {
    if (images?.length > 0 && !value?.length > 0) {
      const createImageRefs = images.map(img => ({
        _type: 'image',
        _key: randomKey(12),
        asset: {
          _ref: img.asset._ref,
          _type: 'reference'
        }
      }));
      onChange(set(createImageRefs));
    }
  }, [images, value, onChange]);

  return <Stack>{renderDefault(props)}</Stack>;
};
export default Images;
