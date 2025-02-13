/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineType } from 'sanity';
import SchemaTypeSelector from '../components/SchemaTypeSelector';
import { convertToSchemaType } from '../utils/convertToSchemaType';
import { Config } from '../config';

const predefinedTypes = (schemaTypeNames?: Record<string, any>) => {
  if (!schemaTypeNames) {
    return [];
  }
  return Object.entries(schemaTypeNames).map(([_, value]) => ({
    type: `${value}`
  }));
};

const generateSchema = (config: Config) => {
  if (config.customSchema === 'full' && Array.isArray(config.patterns)) {
    const schemas = config.patterns
      .map((pattern: any) => convertToSchemaType(pattern))
      .filter((schema: any) => schema);
    return Array.from(new Set([...schemas]));
  }
  const schemas = config?.patterns
    ? config.patterns
        .map((pattern: any) => convertToSchemaType(pattern))
        .filter((schema: any) => schema)
    : [];
  return Array.from(new Set([...predefinedTypes(config?.schemaTypeNames), ...schemas])); // Ensure unique values
};

const schema = (config: Config) => {
  return defineType({
    title: 'Schema Markup',
    name: 'schemaMarkup',
    type: 'array',
    of: !config?.customSchema ? predefinedTypes(config?.schemaTypeNames) : generateSchema(config),
    components: {
      input: SchemaTypeSelector
    }
  });
};

export default schema;
