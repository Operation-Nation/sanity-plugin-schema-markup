import { StringInputProps, set } from 'sanity';
import { Stack } from '@sanity/ui';
import { useEffect } from 'react';

type Props = {
  stringInputProps: StringInputProps;
  formValue?: string;
};

const FormDateTime = ({ stringInputProps, formValue }: Props) => {
  const { renderDefault, onChange, value } = stringInputProps;
  useEffect(() => {
    if (formValue && !value) {
      onChange(set(formValue));
    }
  }, [formValue, value, onChange]);
  return <Stack>{renderDefault(stringInputProps)}</Stack>;
};
export default FormDateTime;
