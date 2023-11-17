import { StringInputProps, useFormValue } from 'sanity';
import FormInput from '../FormInput';

const Description = (props: StringInputProps) => {
  const { onChange, value } = props;
  const excerpt = useFormValue([`excerpt`]);

  return <FormInput onChange={onChange} value={value} formValue={excerpt as string} />;
};
export default Description;
