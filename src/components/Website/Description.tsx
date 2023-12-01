import { StringInputProps, useClient, set } from 'sanity';
import { useEffect } from 'react';
import { Stack } from '@sanity/ui';

const Description = (props: StringInputProps) => {
  const { onChange, value, renderDefault } = props;
  const client = useClient({ apiVersion: '2021-06-07' });
  useEffect(() => {
    const fetchData = async () => {
      await client
        .fetch("*[_type=='homePage'][0]{'description':seo.metaDescription}")
        .then(data => {
          const description = data?.description;
          if (description && !value) {
            onChange(set(description));
          }
        });
    };
    fetchData();
  }, [client, onChange, value]);

  return <Stack>{renderDefault(props)}</Stack>;
};
export default Description;
