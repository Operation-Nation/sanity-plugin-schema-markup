import { StringInputProps, useClient, set } from 'sanity';
import { useEffect } from 'react';
import { Stack } from '@sanity/ui';
import { apiVersion } from '../../utils/common';
import { getConfig } from '../../config';

const Description = (props: StringInputProps) => {
  const { onChange, value, renderDefault } = props;
  const client = useClient(apiVersion);
  const homePageType = getConfig()?.defineQueryTypes?.homePageType || 'homePage';

  useEffect(() => {
    const fetchData = async () => {
      await client
        .fetch("*[_type==$homePageType][0]{'description':seo.metaDescription}", { homePageType })
        .then(data => {
          const description = data?.description;
          if (description && !value) {
            onChange(set(description));
          }
        });
    };
    fetchData();
  }, [client, onChange, value, homePageType]);

  return <Stack>{renderDefault(props)}</Stack>;
};
export default Description;
