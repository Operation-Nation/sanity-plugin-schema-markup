/* eslint-disable react/no-danger */
import React from 'react';
import { Schema } from '../../types/Schema';
import createDynamicJsonLd from '../../utils/createDynamicJsonLd';
import { Config, getConfig, setConfig } from '../../config';

export type NextSchemaScriptProps = {
  schema: Schema[];
  projectId: string;
  dataset: string;
  config?: Config;
};

export const NextSchemaScript = React.memo(
  ({ schema, projectId, dataset, config }: NextSchemaScriptProps) => {
    if (config) setConfig(config);
    const seoMarkup = schema.map(schemaType =>
      createDynamicJsonLd(schemaType, projectId, dataset, getConfig())
    );
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
  }
);
