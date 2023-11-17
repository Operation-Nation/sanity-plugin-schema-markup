import { StringInputProps, useClient } from 'sanity';
import { useState, useEffect } from 'react';
import FormInput from '../FormInput';

const CompanyName = (props: StringInputProps) => {
  const { onChange, value } = props;
  const [companyName, setCompanyName] = useState('');
  const client = useClient({ apiVersion: '2021-06-07' });
  useEffect(() => {
    const fetchData = async () => {
      await client
        .fetch("*[_type=='globalSetting'][0]{companyName}")
        .then(data => setCompanyName(data?.companyName));
    };
    fetchData();
  }, [client]);

  return <FormInput onChange={onChange} value={value} formValue={companyName} />;
};
export default CompanyName;
