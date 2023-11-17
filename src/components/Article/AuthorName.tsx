import { StringInputProps, useFormValue, useClient } from 'sanity';
import { useState, useEffect } from 'react';
import FormInput from '../FormInput';

type Author = {
  _ref: string;
};

const AuthorName = (props: StringInputProps) => {
  const { onChange, value } = props;
  const author = useFormValue([`author`]) as Author;
  const client = useClient({ apiVersion: '2021-06-07' });
  const [authorName, setAuthorName] = useState<string>('');
  useEffect(() => {
    const fetchData = async (ref: string) => {
      await client
        .fetch("*[_type=='person' && _id==$ref][0]{name}", { ref })
        .then(data => setAuthorName(data?.name));
    };
    if (author?._ref) {
      fetchData(author._ref);
    }
  }, [author?._ref, client]);

  return <FormInput onChange={onChange} value={value} formValue={authorName} />;
};
export default AuthorName;
