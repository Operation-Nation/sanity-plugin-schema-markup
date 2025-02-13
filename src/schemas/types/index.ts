import article from './article';
import organization from './organization';
import localBusiness from './localBusiness';
import breadcrumbList from './breadcrumbList';
import socialMediaPosting from './socialMediaPosting';
import person from './person';
import review from './review';
import service from './service';
import product from './product';
import website from './website';
import faqPage from './faqPage';
import recipe from './recipe';
import howTo from './howTo';
import webPage from './webPage';
import imageObject from './imageObject';
import videoObject from './videoObject';
import { Config } from '../../config';
import schema from '../Schema';

const types = (config: Config) => {
  return [
    schema(config),
    article(config?.schemaTypeNames?.article),
    breadcrumbList(config?.schemaTypeNames?.breadcrumbList),
    faqPage(config?.schemaTypeNames?.faqPage),
    howTo(config?.schemaTypeNames?.howTo),
    localBusiness(config?.schemaTypeNames?.localBusiness),
    organization(config?.schemaTypeNames?.organization),
    person(config?.schemaTypeNames?.person),
    product(config?.schemaTypeNames?.product),
    recipe(config?.schemaTypeNames?.recipe),
    review(config?.schemaTypeNames?.review),
    service(config?.schemaTypeNames?.service),
    socialMediaPosting(config?.schemaTypeNames?.socialMediaPosting),
    webPage(config?.schemaTypeNames?.webPage),
    website(config?.schemaTypeNames?.website),
    imageObject,
    videoObject
  ];
};

export default types;
