import { StringInputProps } from 'sanity';
import articleTypeList from './list/articleTypeList';
import ListSelection from '../../../components/ListSelection';

const ArticleListSelect = (props: StringInputProps) => {
  const { onChange, value } = props;

  return <ListSelection list={articleTypeList} onChange={onChange} value={value} />;
};

export default ArticleListSelect;
