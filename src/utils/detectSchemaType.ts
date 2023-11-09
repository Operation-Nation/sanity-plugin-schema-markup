import article from '../schemaTypes/article'

type Props = {
  [key: string]: string
}

const detectSchemaType = (schema: Props) => {
  switch (schema.type) {
    case 'Article':
    case 'NewsArticle':
    case 'BlogPosting':
      return article

    default:
      return undefined
  }
}

export default detectSchemaType
