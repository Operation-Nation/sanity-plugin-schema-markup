import { StringInputProps } from 'sanity';
import organizationTypeList from './list/organizationTypeList';
import ListSelection from '../../../components/ListSelection';

const ListDropdown = (props: StringInputProps) => {
  const { onChange, value } = props;

  return <ListSelection list={organizationTypeList} onChange={onChange} value={value} />;
};

export default ListDropdown;
