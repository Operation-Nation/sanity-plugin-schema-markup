import { StringInputProps } from 'sanity';
import pageTypeList from './list/pageTypeList';
import ListSelection from '../../../components/ListSelection';

const PageTypeListSelect = (props: StringInputProps) => {
  const { onChange, value } = props;

  return <ListSelection list={pageTypeList} onChange={onChange} value={value} />;
};

export default PageTypeListSelect;
