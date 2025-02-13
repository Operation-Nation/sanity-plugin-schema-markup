import { ObjectInputProps, useClient, set } from 'sanity';
import { useEffect } from 'react';
import { Stack } from '@sanity/ui';
import { apiVersion, settingType } from '../../utils/common';

const Logo = (props: ObjectInputProps) => {
  const { onChange, value, renderDefault } = props;
  const client = useClient(apiVersion);
  useEffect(() => {
    const fetchData = async () => {
      await client.fetch('*[_type==$settingType][0]{logoV1,logoV2}', { settingType }).then(data => {
        const logo = data?.logoV2 ? data?.logoV2 : data?.logoV1;
        if (logo && !value) {
          onChange(set({ _type: 'image', asset: { _ref: logo.asset._ref, _type: 'reference' } }));
        }
      });
    };
    fetchData();
  }, [client, onChange, value]);

  return <Stack>{renderDefault(props)}</Stack>;
};
export default Logo;
