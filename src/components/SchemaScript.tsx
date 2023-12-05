import React, { memo } from 'react';
import { helmetJsonLdProp } from 'react-schemaorg';
import { Helmet } from 'react-helmet';
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
export default SchemaScript;
