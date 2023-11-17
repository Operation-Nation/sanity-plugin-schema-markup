import { StringInputProps, useFormValue, useClient } from 'sanity';
import { useState, useEffect } from 'react';
import FormInput from '../FormInput';

type Author = {
  _ref: string;
};

const AuthorUrl = (props: StringInputProps) => {
  const { onChange, value } = props;
  const author = useFormValue([`author`]) as Author;
  const client = useClient({ apiVersion: '2021-06-07' });
  const [authorUrl, setAuthorUrl] = useState<string>('');
  useEffect(() => {
    const fetchData = async (ref: string) => {
      await client
        .fetch(
          "*[_type=='person' && _id==$ref][0]{'slug': slug.current,'globalSetting':*[_type=='globalSetting'][0]{domain}}",
          { ref }
        )
        .then(data =>
          setAuthorUrl(`${data?.globalSetting?.domain?.replace(/\/$/, '')}/${data?.slug}`)
        );
    };
    if (author?._ref) {
      fetchData(author._ref);
    }
  }, [author?._ref, client]);

  return <FormInput onChange={onChange} value={value} formValue={authorUrl} />;
};
export default AuthorUrl;
