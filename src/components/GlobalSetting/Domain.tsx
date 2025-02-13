import { StringInputProps, useClient, set } from 'sanity';
import { useEffect } from 'react';
import { Stack } from '@sanity/ui';
import { apiVersion, settingType } from '../../utils/common';

const Domain = (props: StringInputProps) => {
  const { onChange, value, renderDefault } = props;
  const client = useClient(apiVersion);
  useEffect(() => {
    const fetchData = async () => {
      await client.fetch('*[_type==$settingType][0]{domain}', { settingType }).then(data => {
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
