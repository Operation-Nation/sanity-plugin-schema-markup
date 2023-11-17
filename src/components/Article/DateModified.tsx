import { StringInputProps, useFormValue } from 'sanity';
import FormDateTime from '../FormDateTime';

const DateModified = (props: StringInputProps) => {
  const dateModified = useFormValue([`modifiedAt`]);

  return <FormDateTime stringInputProps={props} formValue={dateModified as string} />;
};
export default DateModified;
