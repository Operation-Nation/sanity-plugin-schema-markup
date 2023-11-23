import { StringInputProps } from 'sanity';
import itemReviewedList from './list/itemReviewedList';
import ListSelection from '../../../components/ListSelection';

const ItemReviewedListSelect = (props: StringInputProps) => {
  const { onChange, value } = props;

  return <ListSelection list={itemReviewedList} onChange={onChange} value={value} />;
};

export default ItemReviewedListSelect;
