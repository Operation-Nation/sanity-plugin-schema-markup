import { StringInputProps, useClient } from 'sanity';
import { useState, useEffect } from 'react';
import FormInput from '../FormInput';
import { apiVersion } from '../../utils/common';
import { getConfig } from '../../config';

const CompanyName = (props: StringInputProps) => {
  const { onChange, value } = props;
  const [companyName, setCompanyName] = useState('');
  const client = useClient(apiVersion);
  const settingType = getConfig()?.defineQueryTypes?.settingType || 'globalSetting';
  useEffect(() => {
    const fetchData = async () => {
      await client
        .fetch('*[_type==$settingType][0]{companyName}', { settingType })
        .then(data => setCompanyName(data?.companyName));
    };
    fetchData();
  }, [client, settingType]);

  return <FormInput onChange={onChange} value={value} formValue={companyName} />;
};
export default CompanyName;
