import React, { memo } from 'react';
import { jsonLdScriptProps } from 'react-schemaorg';
import Head from 'next/head';
import { Graph } from 'schema-dts';
import createDynamicJsonLd from '../utils/createDynamicJsonLd';

type Schema = {
  [key: string]: string;
};

type Props = {
  schema: Schema[];
  projectId: string;
  dataset: string;
};

const SchemaScript = memo(({ schema, projectId, dataset }: Props) => {
  const seoMarkup = schema.map(schemaType => createDynamicJsonLd(schemaType, projectId, dataset));

  return (
    <Head>
      <script
        {...jsonLdScriptProps({
          '@context': 'https://schema.org',
          '@graph': seoMarkup
        } as unknown as Graph)}
      />
    </Head>
  );
});
export default SchemaScript;
