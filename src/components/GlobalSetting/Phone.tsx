import { StringInputProps, useClient, set } from 'sanity';
import { useEffect } from 'react';
import { Stack } from '@sanity/ui';
import { apiVersion, settingType } from '../../utils/common';

const Phone = (props: StringInputProps) => {
  const { onChange, value, renderDefault } = props;
  const client = useClient(apiVersion);
  useEffect(() => {
    const fetchData = async () => {
      await client.fetch('*[_type==$settingType][0]{phone}', { settingType }).then(data => {
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
