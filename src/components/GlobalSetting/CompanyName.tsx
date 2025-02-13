import { StringInputProps, useClient } from 'sanity';
import { useState, useEffect } from 'react';
import FormInput from '../FormInput';
import { apiVersion, settingType } from '../../utils/common';

const CompanyName = (props: StringInputProps) => {
  const { onChange, value } = props;
  const [companyName, setCompanyName] = useState('');
  const client = useClient(apiVersion);
  useEffect(() => {
    const fetchData = async () => {
      await client
        .fetch('*[_type==$settingType][0]{companyName}', { settingType })
        .then(data => setCompanyName(data?.companyName));
    };
    fetchData();
  }, [client]);

  return <FormInput onChange={onChange} value={value} formValue={companyName} />;
};
export default CompanyName;
