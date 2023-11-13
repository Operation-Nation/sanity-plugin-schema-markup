import { StringInputProps } from 'sanity';
import localBusinessTypeList from './list/localBusinessTypeList';
import ListSelection from '../../../components/ListSelection';

const ListDropdown = (props: StringInputProps) => {
  const { onChange, value } = props;

  return <ListSelection list={localBusinessTypeList} onChange={onChange} value={value} />;
};

export default ListDropdown;
