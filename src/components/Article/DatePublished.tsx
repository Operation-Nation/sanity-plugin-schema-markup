import { StringInputProps, useFormValue } from 'sanity';
import FormDateTime from '../FormDateTime';

const DatePublished = (props: StringInputProps) => {
  const datePublished = useFormValue([`publishedAt`]);

  return <FormDateTime stringInputProps={props} formValue={datePublished as string} />;
};
export default DatePublished;
