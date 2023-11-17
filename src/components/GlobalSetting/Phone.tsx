import { ObjectInputProps, useClient, set } from 'sanity';
import { useEffect } from 'react';
import { Stack } from '@sanity/ui';

const Phone = (props: ObjectInputProps) => {
  const { onChange, value, renderDefault } = props;
  const client = useClient({ apiVersion: '2021-06-07' });
  useEffect(() => {
    const fetchData = async () => {
      await client.fetch("*[_type=='globalSetting'][0]{phone}").then(data => {
        const phone = data?.phone;
        if (phone && !value) {
          onChange(set(phone));
        }
      });
    };
    fetchData();
  }, [client, onChange, value]);

  return <Stack>{renderDefault(props)}</Stack>;
};
export default Phone;
