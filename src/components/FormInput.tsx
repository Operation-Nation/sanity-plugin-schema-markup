import { FormSetPatch, FormUnsetPatch, set, unset } from 'sanity';
import { Stack, TextInput } from '@sanity/ui';
import { useCallback, ChangeEvent, useEffect } from 'react';

type Props = {
  onChange: (value: FormSetPatch | FormUnsetPatch) => void;
  value?: string;
  formValue?: string;
};

const FormInput = ({ onChange, value, formValue }: Props) => {
  useEffect(() => {
    if (formValue && !value) {
      onChange(set(formValue));
    }
  }, [formValue, value, onChange]);
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset()),
    [onChange]
  );
  return (
    <Stack>
      <TextInput onChange={handleChange} value={value} />
    </Stack>
  );
};
export default FormInput;
