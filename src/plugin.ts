/* eslint-disable @typescript-eslint/no-explicit-any */
import { definePlugin } from 'sanity';
import types from './schemas/types';
import { Config, getConfig, setConfig } from './config';

export const schemaMarkup = definePlugin<Config | void>(config => {
  if (config) {
    setConfig(config);
  }
  return {
    name: '@operationnation/sanity-plugin-schema-markup',
    schema: { types: types(getConfig()) }
  };
});
