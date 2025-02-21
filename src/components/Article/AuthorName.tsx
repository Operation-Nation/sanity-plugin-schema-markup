import { StringInputProps, useFormValue, useClient } from 'sanity';
import { useState, useEffect } from 'react';
import FormInput from '../FormInput';
import { apiVersion } from '../../utils/common';
import { getConfig } from '../../config';

type Author = {
  _ref: string;
};

const AuthorName = (props: StringInputProps) => {
  const authorType = getConfig()?.defineQueryTypes?.authorType || 'person';
  const { onChange, value } = props;
  const author = useFormValue([`author`]) as Author;
  const client = useClient(apiVersion);
  const [authorName, setAuthorName] = useState<string>('');
  useEffect(() => {
    const fetchData = async (ref: string) => {
      await client
        .fetch('*[_type==$authorType && _id==$ref][0]{name}', { ref, authorType })
        .then(data => setAuthorName(data?.name));
    };
    if (author?._ref) {
      fetchData(author._ref);
    }
  }, [author?._ref, client, authorType]);

  return <FormInput onChange={onChange} value={value} formValue={authorName} />;
};
export default AuthorName;
