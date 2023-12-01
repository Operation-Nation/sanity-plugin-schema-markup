import { StringInputProps, useFormValue } from 'sanity';
import FormInput from '../FormInput';

type NameProps = {
  en?: string;
};

const Name = (props: StringInputProps) => {
  const { onChange, value } = props;
  const getType = useFormValue(['_type']) as string;
  const getName = useFormValue(['title']) as NameProps;
  const type = getType?.length > 0 ? getType.charAt(0).toUpperCase() + getType.slice(1) : getType;
  const title = getType === 'page' ? getName?.en : type;

  return (
    <FormInput
      onChange={onChange}
      value={value}
      formValue={typeof title === 'string' ? title : undefined}
    />
  );
};
export default Name;
