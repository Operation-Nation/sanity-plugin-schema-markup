/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Dialog, Grid, Flex, Text, Stack } from '@sanity/ui';
import { AddIcon } from '@sanity/icons';
import { ArrayInputFunctionsProps, ArraySchemaType } from 'sanity';
import { useCallback, useState } from 'react';
import { IconType } from 'react-icons';

function ArrayFunctions(
  props: ArrayInputFunctionsProps<string | number | boolean, ArraySchemaType>
) {
  const { onValueCreate, schemaType, onItemAppend } = props;
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);
  const items = schemaType.of;
  const handleClick = (type: any) => {
    const value = onValueCreate(type);
    onItemAppend(value);
    onClose();
  };

  return (
    <Stack space={4}>
      <Button icon={AddIcon} text="Add Schema Type" mode="ghost" onClick={onOpen} />
      {open && (
        <Dialog
          header="Select Schema Type"
          id="schema-type-selector"
          onClose={onClose}
          zOffset={1000}
          width={1}
        >
          <Box padding={4}>
            <Grid columns={[2, 3]} gap={3}>
              {items.map(item => {
                const Icon = item.icon as IconType;
                return (
                  <Button key={item.name} mode="ghost" onClick={() => handleClick(item)}>
                    <Flex padding={2} gap={2} align="center" justify="center">
                      {item?.icon && <Icon fontSize="24px" />}
                      <Text size={1}>{item.title}</Text>
                    </Flex>
                  </Button>
                );
              })}
            </Grid>
          </Box>
        </Dialog>
      )}
    </Stack>
  );
}

export default function PageBuilderDropdown(props: any) {
  const { renderDefault } = props;

  return <Stack space={3}>{renderDefault({ ...props, arrayFunctions: ArrayFunctions })}</Stack>;
}
