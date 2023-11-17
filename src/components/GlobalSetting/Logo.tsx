import { ObjectInputProps, useClient, set } from 'sanity';
import { useEffect } from 'react';
import { Stack } from '@sanity/ui';

const Logo = (props: ObjectInputProps) => {
  const { onChange, value, renderDefault } = props;
  const client = useClient({ apiVersion: '2021-06-07' });
  useEffect(() => {
    const fetchData = async () => {
      await client.fetch("*[_type=='globalSetting'][0]{logoV1,logoV2}").then(data => {
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
