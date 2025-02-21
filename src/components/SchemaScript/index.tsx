import React from 'react';
import { helmetJsonLdProp } from 'react-schemaorg';
import { Helmet } from 'react-helmet';
import { Graph } from 'schema-dts';
import createDynamicJsonLd from '../../utils/createDynamicJsonLd';
import { Schema } from '../../types/Schema';
import { Config, getConfig, setConfig } from '../../config';

export type SchemaScriptProps = {
  schema: Schema[];
  projectId: string;
  dataset: string;
  config?: Config;
};

export const SchemaScript = React.memo(
  ({ schema, projectId, dataset, config }: SchemaScriptProps) => {
    if (config) setConfig(config);
    const seoMarkup = schema.map(schemaType =>
      createDynamicJsonLd(schemaType, projectId, dataset, getConfig())
    );
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
  }
);
