import { StringInputProps, useFormValue, useClient } from 'sanity';
import { useState, useEffect } from 'react';
import FormInput from '../FormInput';
import { apiVersion } from '../../utils/common';
import { getConfig } from '../../config';

type Author = {
  _ref: string;
};

const AuthorUrl = (props: StringInputProps) => {
  const { onChange, value } = props;
  const author = useFormValue([`author`]) as Author;
  const authorType = getConfig()?.defineQueryTypes?.authorType || 'person';
  const settingType = getConfig()?.defineQueryTypes?.settingType || 'globalSetting';
  const client = useClient(apiVersion);
  const [authorUrl, setAuthorUrl] = useState<string>('');
  useEffect(() => {
    const fetchData = async (ref: string) => {
      await client
        .fetch(
          "*[_type==$authorType && _id==$ref][0]{'slug': slug.current,'globalSetting':*[_type==$settingType][0]{domain}}",
          { ref, settingType, authorType }
        )
        .then(data =>
          setAuthorUrl(`${data?.globalSetting?.domain?.replace(/\/$/, '')}/${data?.slug}`)
        );
    };
    if (author?._ref) {
      fetchData(author._ref);
    }
  }, [author?._ref, client, settingType, authorType]);

  return <FormInput onChange={onChange} value={value} formValue={authorUrl} />;
};
export default AuthorUrl;
