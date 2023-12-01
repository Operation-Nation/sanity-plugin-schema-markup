import { StringInputProps, useClient, set } from 'sanity';
import { useEffect } from 'react';
import { Stack } from '@sanity/ui';

const Domain = (props: StringInputProps) => {
  const { onChange, value, renderDefault } = props;
  const client = useClient({ apiVersion: '2021-06-07' });
  useEffect(() => {
    const fetchData = async () => {
      await client.fetch("*[_type=='globalSetting'][0]{domain}").then(data => {
        const domain = data?.domain?.replace(/\/$/, '');
        if (domain && !value) {
          onChange(set(domain));
        }
      });
    };
    fetchData();
  }, [client, onChange, value]);

  return <Stack>{renderDefault(props)}</Stack>;
};
export default Domain;
