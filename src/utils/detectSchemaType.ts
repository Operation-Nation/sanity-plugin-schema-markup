import article from '../schemaTypes/article';
import organization from '../schemaTypes/organization';

type Props = {
  [key: string]: string;
};

const detectSchemaType = (schema: Props) => {
  switch (schema.type) {
    case 'Article':
    case 'NewsArticle':
    case 'BlogPosting':
      return article;
    case 'Organization':
    case 'Airline':
    case 'Consortium':
    case 'Corporation':
    case 'EducationalOrganization':
    case 'FundingScheme':
    case 'GovernmentOrganization':
    case 'LibrarySystem':
    case 'MedicalOrganization':
    case 'NGO':
    case 'NewsMediaOrganization':
    case 'PerformingGroup':
    case 'Project':
      return organization;
    default:
      return undefined;
  }
};

export default detectSchemaType;
