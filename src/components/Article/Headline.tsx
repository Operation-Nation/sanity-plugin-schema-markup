import { StringInputProps, useFormValue } from 'sanity';
import FormInput from '../FormInput';

const Headline = (props: StringInputProps) => {
  const { onChange, value } = props;
  const headline = useFormValue([`title`]);

  return <FormInput onChange={onChange} value={value} formValue={headline as string} />;
};
export default Headline;
