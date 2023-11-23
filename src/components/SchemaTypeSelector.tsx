/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Dialog } from '@sanity/ui';
import { AddIcon } from '@sanity/icons';
import { Grid, Icon, Stack, Text } from '@chakra-ui/react';
import { ArrayInputFunctionsProps, ArraySchemaType } from 'sanity';
import { useCallback, useState } from 'react';

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
    <Stack spacing={4}>
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
            <Grid
              templateColumns={{
                base: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)'
              }}
              gap={3}
            >
              {items.map(item => {
                return (
                  <Button key={item.name} mode="ghost" onClick={() => handleClick(item)}>
                    <Stack
                      padding={2}
                      spacing={2}
                      align="center"
                      justify="center"
                      textAlign="center"
                    >
                      <Icon as={item.icon} boxSize={6} />
                      <Text fontSize="sm">{item.title}</Text>
                    </Stack>
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

  return <Stack spacing={3}>{renderDefault({ ...props, arrayFunctions: ArrayFunctions })}</Stack>;
}
