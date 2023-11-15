import { Stack } from '@sanity/ui';
import { StringInputProps } from 'sanity';
import ListSelection from '../ListSelection';
import list from './list';

const TimePicker = (props: StringInputProps) => {
  const { onChange, value } = props;
  return (
    <Stack>
      <ListSelection list={list} onChange={onChange} value={value} />
    </Stack>
  );
};
export default TimePicker;
