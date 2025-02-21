/* eslint-disable @typescript-eslint/no-explicit-any */
// config.js
export type Pattern = {
  '@type': string;
} & Record<string, any>;
export type Config = {
  customSchema?: 'partial' | 'full';
  patterns?: Pattern[];
  defineQueryTypes?: Record<string, string>;
  schemaTypeNames?: Record<string, string>;
};
let configData: Config = {
  defineQueryTypes: {
    settingType: 'globalSetting',
    socialLinksType: 'socialLinks',
    authorType: 'person',
    homePageType: 'homePage',
    heroType: 'hero'
  },
  schemaTypeNames: {
    article: 'article',
    breadcrumbList: 'breadcrumbList',
    faqPage: 'faqPageType',
    howTo: 'howToType',
    imageObject: 'imageObjectType',
    localBusiness: 'localBusiness',
    organization: 'organization',
    person: 'personType',
    product: 'productType',
    recipe: 'recipeType',
    review: 'reviewType',
    socialMediaPosting: 'socialMediaPosting',
    service: 'serviceType',
    videoObject: 'videoObjectType',
    webPage: 'webPageType',
    website: 'websiteType'
  }
};

/**
 * Update the configuration.
 * @param {Object} options - The configuration options.
 */
export function setConfig(options: Config) {
  configData = {
    customSchema: options?.customSchema,
    patterns: options?.patterns,
    schemaTypeNames: {
      ...configData.schemaTypeNames,
      ...options?.schemaTypeNames
    },
    defineQueryTypes: {
      ...configData.defineQueryTypes,
      ...options?.defineQueryTypes
    }
  };
}

/**
 * Retrieve the current configuration.
 * @returns {Object} The configuration data.
 */
export function getConfig(): Config {
  return configData;
}
