import { Stack, Select } from '@sanity/ui';
import { useCallback, ChangeEvent } from 'react';
import { FormSetPatch, FormUnsetPatch, set, unset } from 'sanity';

type List =
  | string
  | {
      optgroup?: string;
      list?: string[];
    };

type Props = {
  list: List[];
  onChange: (value: FormSetPatch | FormUnsetPatch) => void;
  value?: string;
};

const ListSelection = ({ list, onChange, value }: Props) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const nextValue = event.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange]
  );
  const removeSpace = (text: string) => text.replace(/\s/g, '');
  return (
    <Stack>
      <Select fontSize={2} padding={3} space={2} onChange={handleChange} defaultValue={value}>
        {list.map(item => {
          if (typeof item === 'string') {
            return (
              <option key={item} value={removeSpace(item)}>
                {item}
              </option>
            );
          }
          if (item.optgroup && item.list) {
            return (
              <optgroup key={item.optgroup} label={item.optgroup}>
                {item.list.map(subItem => (
                  <option key={subItem} value={removeSpace(subItem)}>
                    {subItem}
                  </option>
                ))}
              </optgroup>
            );
          }
          return null;
        })}
      </Select>
    </Stack>
  );
};
export default ListSelection;
