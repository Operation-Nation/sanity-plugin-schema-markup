import { StringInputProps, useFormValue } from 'sanity';
import FormInput from '../FormInput';

const Description = (props: StringInputProps) => {
  const { onChange, value } = props;
  const description = useFormValue(['seo', 'metaDescription']);

  return (
    <FormInput
      onChange={onChange}
      value={value}
      formValue={typeof description === 'string' ? description : undefined}
    />
  );
};
export default Description;
