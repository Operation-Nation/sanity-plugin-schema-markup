/* eslint-disable react/no-danger */
import React, { memo } from 'react';
import { Schema } from '../../types/Schema';
import createDynamicJsonLd from '../../utils/createDynamicJsonLd';

export type NextSchemaScriptProps = {
  schema: Schema[];
  projectId: string;
  dataset: string;
};

export const NextSchemaScript = memo(({ schema, projectId, dataset }: NextSchemaScriptProps) => {
  const seoMarkup = schema.map(schemaType => createDynamicJsonLd(schemaType, projectId, dataset));
  if (seoMarkup.length === 0) return null;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': seoMarkup
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
});
