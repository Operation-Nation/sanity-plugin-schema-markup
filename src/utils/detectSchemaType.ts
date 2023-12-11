import article from '../patterns/article';
import organization from '../patterns/organization';
import localBusiness from '../patterns/localBusiness';
import breadcrumb from '../patterns/breadcrumb';
import socialMediaPosting from '../patterns/socialMediaPosting';
import person from '../patterns/person';
import review from '../patterns/review';
import service from '../patterns/service';
import product from '../patterns/product';
import website from '../patterns/website';
import faqPage from '../patterns/faqPage';
import recipe from '../patterns/recipe';
import howTo from '../patterns/howTo';
import webPage from '../patterns/webPage';
import imageObject from '../patterns/imageObject';
import videoObject from '../patterns/videoObject';
import articleTypeList from '../schemas/types/article/list/articleTypeList';
import organizationTypeList from '../schemas/types/organization/list/organizationTypeList';
import localBusinessTypeList from '../schemas/types/localBusiness/list/localBusinessTypeList';
import pageTypeList from '../schemas/types/webPage/list/pageTypeList';
import { Schema } from '../types/Types';

type List =
  | string
  | {
      optgroup?: string;
      list?: string[];
    };

const findSchemaType = (typeList: List[], schemaType: string) => {
  const result = typeList.find(item => {
    if (typeof item === 'string' && item === schemaType) {
      return schemaType;
    }
    if (typeof item === 'object' && item.optgroup && item.list) {
      const findInList = item.list.find(
        (subitem: string) => subitem === schemaType.replace(/([A-Z])/g, ' $1').trim()
      );
      if (findInList) {
        return schemaType;
      }
      return undefined;
    }
    return undefined;
  });
  if (typeof result === 'string') {
    return schemaType;
  }
  if (typeof result === 'object' && result.optgroup && result.list) {
    const findInList = result?.list.find(
      (subitem: string) => subitem === schemaType.replace(/([A-Z])/g, ' $1').trim()
    );
    if (findInList) {
      return schemaType;
    }
    return undefined;
  }
  return undefined;
};

const detectSchemaType = (schema: Schema) => {
  const { type } = schema;
  switch (type) {
    case findSchemaType(articleTypeList, type):
      return article;
    case findSchemaType(organizationTypeList, type):
      return organization;
    case findSchemaType(localBusinessTypeList, type):
      return localBusiness;
    case 'BreadcrumbList':
      return breadcrumb;
    case 'SocialMediaPosting':
      return socialMediaPosting;
    case 'Person':
      return person;
    case 'Review':
      return review;
    case 'Service':
      return service;
    case 'Product':
      return product;
    case 'WebSite':
      return website;
    case 'FAQPage':
      return faqPage;
    case 'Recipe':
      return recipe;
    case 'HowTo':
      return howTo;
    case findSchemaType(pageTypeList, type):
      return webPage;
    case 'ImageObject':
      return imageObject;
    case 'VideoObject':
      return videoObject;
    default:
      return undefined;
  }
};

export default detectSchemaType;
