import React, { memo } from 'react';
import { helmetJsonLdProp } from 'react-schemaorg';
import { Helmet } from 'react-helmet';
import { Graph } from 'schema-dts';
import createDynamicJsonLd from '../../utils/createDynamicJsonLd';
import { Schema } from '../../types/Schema';

export type SchemaScriptProps = {
  schema: Schema[];
  projectId: string;
  dataset: string;
};

export const SchemaScript = memo(({ schema, projectId, dataset }: SchemaScriptProps) => {
  const seoMarkup = schema.map(schemaType => createDynamicJsonLd(schemaType, projectId, dataset));
  if (seoMarkup.length === 0) return null;

  return (
    <Helmet
      script={[
        helmetJsonLdProp({
          '@context': 'https://schema.org',
          '@graph': seoMarkup
        } as unknown as Graph)
      ]}
    />
  );
});
