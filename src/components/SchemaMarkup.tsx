import React, { useState } from 'react';
import { Box, Stack, Button, Dialog } from '@sanity/ui';
import { ArrayOfObjectsInputProps } from 'sanity';

const SchemaMarkup = (schemaMarkupProps: ArrayOfObjectsInputProps) => {
  const { renderDefault } = schemaMarkupProps;
  const [open, setOpen] = useState(false);
  const handleDialog = () => {
    setOpen(!open);
  };

  return (
    <Stack space={3} marginTop={2}>
      <Box>
        <Button mode="ghost" tone="default" text="Add/Edit Schema Markup" onClick={handleDialog} />
        {open && (
          <Dialog
            header="Schema Markup"
            id="schema-markup-dialog"
            onClose={handleDialog}
            zOffset={1000}
          >
            <Box padding={4}>{renderDefault(schemaMarkupProps)}</Box>
          </Dialog>
        )}
      </Box>
    </Stack>
  );
};

export default SchemaMarkup;
