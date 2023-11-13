import article from '../patterns/article';
import organization from '../patterns/organization';
import localBusiness from '../patterns/localBusiness';
import breadcrumb from '../patterns/breadcrumb';
import articleTypeList from '../schemas/types/article/list/articleTypeList';
import organizationTypeList from '../schemas/types/organization/list/organizationTypeList';
import localBusinessTypeList from '../schemas/types/localBusiness/list/localBusinessTypeList';

type Props = {
  [key: string]: string;
};

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

const detectSchemaType = (schema: Props) => {
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
    default:
      return undefined;
  }
};

export default detectSchemaType;
