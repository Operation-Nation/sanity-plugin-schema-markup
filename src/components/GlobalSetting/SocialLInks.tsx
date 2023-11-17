import { ArrayOfObjectsInputProps, useClient, set } from 'sanity';
import { Stack } from '@sanity/ui';
import { useEffect } from 'react';

const SocialLinks = (props: ArrayOfObjectsInputProps) => {
  const { renderDefault, onChange, value } = props;
  const client = useClient({ apiVersion: '2021-06-07' });
  useEffect(() => {
    const fetchData = async () => {
      await client
        .fetch(
          "*[_type=='socialLinks'][0]{facebook,instagram,youtube,twitter,linkedin,pinterest,vimeo,tiktok}"
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
  }, [client, onChange, value?.length]);

  return <Stack>{renderDefault(props)}</Stack>;
};
export default SocialLinks;
