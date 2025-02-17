import { ArrayOfObjectsInputProps, useClient, set } from 'sanity';
import { Stack } from '@sanity/ui';
import { useEffect } from 'react';
import { apiVersion } from '../../utils/common';
import { getConfig } from '../../config';

const SocialLinks = (props: ArrayOfObjectsInputProps) => {
  const { renderDefault, onChange, value } = props;
  const client = useClient(apiVersion);
  const socialLinksType = getConfig()?.defineQueryTypes?.socialLinksType || 'socialLinks';

  useEffect(() => {
    const fetchData = async () => {
      await client
        .fetch(
          '*[_type==$socialLinksType][0]{facebook,instagram,youtube,twitter,linkedin,pinterest,vimeo,tiktok}',
          { socialLinksType }
        )
        .then(data => {
          const allLinks = [
            data?.facebook,
            data?.instagram,
            data?.youtube,
            data?.twitter,
            data?.linkedin,
            data?.pinterest,
            data?.vimeo,
            data?.tiktok
          ];
          const socialLinks = allLinks.filter(item => !!item);
          if (socialLinks?.length > 0 && !value?.length) {
            onChange(set(socialLinks));
          }
        });
    };
    fetchData();
  }, [client, onChange, value?.length, socialLinksType]);

  return <Stack>{renderDefault(props)}</Stack>;
};
export default SocialLinks;
