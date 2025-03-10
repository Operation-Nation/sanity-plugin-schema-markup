# @operationnation/sanity-plugin-schema-markup

> This is a **Sanity Studio v3** plugin.

# What it is

The `@operationnation/sanity-plugin-schema-markup` is a Sanity Studio plugin designed to simplify the process of generating Schema Markup, also known as structured data, for various types of content. This plugin is particularly useful for enhancing the structured data of your content, making it more accessible and understandable for search engines. You can read more about Schema Markup on the [official website](https://schema.org/).

## Key Features

- **Schema Markup Generation:** The plugin allows you to easily generate schema markup for different types such as articles, recipes, reviews, and more.

- **Sanity Studio Integration:** Seamlessly integrate schema markup generation into your Sanity Studio workflow, making it a part of your content creation process.

- **Dynamic Schema Markup:** The plugin supports the dynamic creation of schema markup, enabling you to tailor the structured data based on your specific content and requirements.

- **React Component:** Use the `<SchemaScript />` component in the FE to inject a [JSON-LD](https://json-ld.org/) script into the `<head>` of the document.

## Installation

To get started, install the plugin using npm:

```sh
npm install @operationnation/sanity-plugin-schema-markup
```

## Usage in Sanity Studio

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import { defineConfig } from 'sanity';
import { schemaMarkup } from '@operationnation/sanity-plugin-schema-markup';

export default defineConfig({
  plugins: [schemaMarkup()]
});
```

You can then add the `schemaMarkup` field to any Sanity Document you want it to be in.

```javascript
const myDocument = {
  type: 'document',
  name: 'myDocument',
  fields: [
    {
      title: 'Schema Markup',
      name: 'schemaMarkup',
      type: 'schemaMarkup'
    }
  ]
};
```

![Schema Markup Field](./src/images/add_schema_markup_button.png)

![Schema Markup Modal](./src/images/schema_markup_modal.png)

## Usage on the front-end with React

Create a shared `SchemaMarkup` component that can be used in any page in your React app.

```typescript
import { SchemaScript, type Schema } from '@operationnation/sanity-plugin-schema-markup/schemaScript';

type Props = {
  schema: Schema[];
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const SchemaMarkup = ({ schema }: Props) => {
  return (
	  <SchemaScript schema={schema} projectId={projectId as string} dataset={dataset as string} />
  );
};

export default SchemaMarkup;
```

Then you can use the `SchemaMarkup` component where ever you are consuming the `schemaMarkup` data from your Sanity Groq or GraphQL query. So lets say we have a Post page where we conduct our Groq query and the `schemaMarkup` object is on a post object. We can simply pass `schemaMarkup` directly into the `<SchemaMarkup/>` component.

```js
const post = await getPost(client, params.slug)

return (
    <Container>
      <section className="post">
        {post.schemaMarkup && <SchemaMarkup schema={post.schemaMarkup}  />}
        {post.mainImage ? (
          <Image
            className="post__cover"
            src={urlForImage(post.mainImage).url()}
            height={231}
            width={367}
            alt=""
          />
        ) : (
          <div className="post__cover--none" />
        )}
        <div className="post__container">
          <h1 className="post__title">{post.title}</h1>
         ....
    </Container>
  )
```
## Usage on the front-end with Next Js App Router

Create a shared `SchemaMarkup` component that can be used in any page in your React app.

```typescript

import { NextSchemaScript, type Schema } from '@operationnation/sanity-plugin-schema-markup/nextSchemaScript';

type Props = {
  schema: Schema[];
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const SchemaMarkup = ({ schema }: Props) => {
  return (
	  <NextSchemaScript schema={schema} projectId={projectId as string} dataset={dataset as string} />
  );
};

export default SchemaMarkup;
```

## Create schema markup script dynamically (optional)

> Note: It's important to note that this dynamic creation of the schema markup script is optional. If your implementation doesn't require any custom mapping or configuration, you can skip this section and use the default schema patterns provided by the library. However, if you need to customize the schema markup based on your specific needs, this dynamic approach allows you to do so.

By creating the schema markup script dynamically, you have the flexibility to define the schema type, properties, and values based on your data and business logic. If your schema data constantly changing or you are trying to get the data from an api then you may need to create the schema script dynamically. By creating the schema markup script dynamically, you have the flexibility to define the schema type, properties, and values based on your data and business logic.

If your implementation requires any custom mapping or configuration, you can always create your schema markup how you see fit.
When creating schema markup script, you need to follow the schema type patterns:
[**Click here to see all schema patterns**](#all-schema-type-patterns)

```javascript
import { SchemaScript, createImgUrl } from '@operationnation/sanity-plugin-schema-markup';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const SchemaMarkup = ({ data })=> {
	const { getImgUrl } = createImgUrl( projectId, dataset );
	const  articleSchemaType = {
		type: 'Article',
		headline: data.title,
		description: data.excerpt,
		datePublished: data.publishedAt,
		dateModified: data.modifiedAt,
		author: {
			type: 'Person',
			name: data.author.name,
			url: data.domain
			},
		publisher: {
			type: 'Organization',
			name: data.companyName,
			logo: data.logo
			},
		image: data.images.map(image=>getImgUrl(image.asset._ref))
	};

	return (
	  <SchemaScript schema={[articleSchemaType]} projectId={projectId as string} dataset={dataset as string}  />
	);
}
```

In the code snippet, the `SchemaMarkup` component is defined, which takes in `data` as props. Inside the component, a schema object of type `Article` is created dynamically based on the provided data.

The `createImgUrl` function from the library is used to generate the image URLs for the `image` property of the schema object.

## Customize Schema Markup (New Update!!! v2.0.0)

You can now customize the schema markup configuration using the `schemaMarkupConfig` object. This allows you to define custom schema patterns, query types, and schema type names.

### Configuration Example

```typescript
//schemaMarkup.config.ts
import { type Config } from '@operationnation/sanity-plugin-schema-markup';

const movie = {
  '@type': 'Movie',
  '@id': 'string',
  name: 'string',
  director: { '@type': 'Person', name: 'string' },
  actor: [{ '@type': 'Person', name: 'string' }],
  genre: 'string',
  datePublished: 'date',
  description: 'string',
  image: 'string'
};

const tvSeries = {
  '@type': 'TVSeries',
  '@id': 'string',
  name: 'string',
  genre: 'string',
  actor: [{ '@type': 'Person', name: 'string' }],
  director: { '@type': 'Person', name: 'string' },
  numberOfSeasons: 'number',
  numberOfEpisodes: 'number',
  datePublished: 'date',
  description: 'string',
  image: 'string'
};

export const schemaMarkupConfig: Config = {
  customSchema: 'partial',
  patterns: [movie, tvSeries],
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
```
### Explanation
- **customSchema:**
  * `partial`: to add custom schema patterns without replacing all static schema types. 
  * `full`: to replace all static schema types with the custom patterns.
- **patterns:** Define custom schema patterns for specific types.
Please try to maintain the pattern like this example:

```typescript 
const movie = {
  '@type': 'Movie',
  '@id': 'string',
  name: 'string',
  director: { '@type': 'Person', name: 'string' },
  actor: [{ '@type': 'Person', name: 'string' }],
  genre: 'string',
  datePublished: 'date',
  description: 'string',
  image: 'string'
}; 
```
- **defineQueryTypes:** Specify document names for dynamic data retrieval. 
<br/>
The following are all predefined schemas that we have used in the plugin. You can visit `src/components` and see which components are used with which query data and change the schema name to avoid conflict.

```typescript
  defineQueryTypes: {
    settingType: 'globalSetting',
    socialLinksType: 'socialLinks',
    authorType: 'person',
    homePageType: 'homePage',
    heroType: 'hero'
  },
```
You can rename like this

```typescript
defineQueryTypes: {
    settingType: 'settings', //previously was 'globalSetting'
}
```
- **schemaTypeNames:** Predefined schema type names that can be renamed to avoid conflicts.
This configuration provides flexibility to customize schema markup based on your specific needs. 

```typescript
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
```

These schema types are the predefined static types. You can rename like this

```typescript
schemaTypeNames: {
    article: 'articleType', //previously 'article'
}
```

Create a config file `schemaMarkup.config.ts` and implement it in both plugin and schema script

```typescript
//other imports
import { schemaMarkup } from '@operationnation/sanity-plugin-schema-markup';

import { schemaMarkupConfig } from './schemaMarkup.config';


const plugins = [
  //other plugins
  schemaMarkup(schemaMarkupConfig),
]
```

```typescript
import {
  NextSchemaScript,
  type Schema
} from '@operationnation/sanity-plugin-schema-markup/nextSchemaScript';
import { schemaMarkupConfig } from '../../config/schemaMarkup.config';

type Props = {
  schema: Schema[];
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const SchemaMarkup = ({ schema }: Props) => {
  return (
    <NextSchemaScript
      schema={schema}
      projectId={projectId as string}
      dataset={dataset as string}
      config={schemaMarkupConfig}
    />
  );
};

export default SchemaMarkup;

```

## All schema type patterns

<details>

<summary>Article</summary>

### Article Schema Markup Type

```javascript
const article = {
  type: 'string',
  id: 'string',
  publisher: {
    name: 'string',
    logo: 'string',
    type: 'string',
    id: 'string'
  },
  headline: 'string',
  datePublished: 'string',
  image: ['string', 'string'],
  author: {
    name: 'string',
    url: 'string',
    type: 'string',
    id: 'string'
  },
  description: 'string',
  dateModified: 'string'
};
```

</details>

<details>

<summary>BreadcrumbList</summary>

### BreadcrumbList Schema Markup Type

```javascript
const breadcrumb = {
  type: 'BreadcrumbList',
  id: 'string',
  itemListElement: [
    {
      type: 'ListItem',
      id: 'string',
      position: 1,
      name: 'string',
      item: 'url'
    },
    {
      type: 'ListItem',
      id: 'string',
      position: 2,
      name: 'string',
      item: 'url'
    }
  ]
};
```

</details>

<details>

<summary>FAQPage</summary>

### FAQPage Schema Markup Type

```javascript
const faqPage = {
  type: 'FAQPage',
  id: 'string',
  mainEntity: [
    {
      type: 'Question',
      name: 'string',
      acceptedAnswer: {
        type: 'Answer',
        text: 'string'
      }
    },
    {
      type: 'Question',
      name: 'string',
      acceptedAnswer: {
        type: 'Answer',
        text: 'string'
      }
    }
  ]
};
```

</details>

<details>

<summary>HowTo</summary>

### HowTo Schema Markup Type

```javascript
const howTo = {
  type: 'HowTo',
  id: 'string',
  name: 'string',
  description: 'string',
  image: 'url',
  totalTime: 'string',
  estimatedCost: {
    type: 'MonetaryAmount',
    currency: 'string',
    value: 'string'
  },
  supply: [
    {
      type: 'HowToSupply',
      name: 'string'
    }
  ],
  tool: [
    {
      type: 'HowToTool',
      name: 'string'
    }
  ],
  step: [
    {
      type: 'HowToStep',
      text: 'string',
      image: 'url',
      name: 'string',
      url: 'url'
    }
  ]
};
```

</details>

<details>

<summary>ImageObject</summary>

### ImageObject Schema Markup Type

```javascript
const imageObject = {
  type: 'ImageObject',
  id: 'string',
  author: 'string',
  contentLocation: 'string',
  contentUrl: 'url',
  datePublished: 'date',
  description: 'string',
  name: 'string',
  caption: 'string'
};
```

</details>

<details>

<summary>LocalBusiness</summary>

### LocalBusiness Schema Markup Type

```javascript
const localBusiness = {
  type: 'string',
  id: 'string',
  name: 'string',
  logo: 'string',
  image: 'string',
  url: 'string',
  telephone: 'string',
  priceRange: 'string',
  address: {
    type: 'PostalAddress',
    streetAddress: 'string',
    addressLocality: 'string',
    addressRegion: 'string',
    postalCode: 'string',
    addressCountry: 'string'
  },
  geo: {
    type: 'GeoCoordinates',
    latitude: 0.0,
    longitude: 0.0
  },
  hasMap: 'string',
  openingHoursSpecification: [
    {
      type: 'OpeningHoursSpecification',
      dayOfWeek: ['string', 'string'],
      opens: 'string',
      closes: 'string'
    }
  ],
  sameAs: ['string', 'string']
};
```

</details>

<details>

<summary>Organization</summary>

### Organization Schema Markup Type

```javascript
const organization = {
  type: 'string',
  id: 'string',
  name: 'string',
  alternateName: 'string',
  url: 'string',
  logo: 'string',
  contactPoint: [
    {
      type: 'string',
      id: 'string',
      telephone: 'string',
      contactType: 'string',
      contactOption: ['string', 'string'],
      areaServed: ['string', 'string'],
      availableLanguage: ['string', 'string']
    }
  ],
  sameAs: ['string', 'string']
};
```

</details>

<details>

<summary>Person</summary>

### Person Schema Markup Type

```javascript
const person = {
  type: 'string',
  id: 'string',
  name: 'string',
  url: 'string',
  image: 'string',
  jobTitle: 'string',
  description: 'string',
  email: 'string',
  telephone: 'string',
  birthDate: 'string',
  gender: 'string',
  spouse: 'string',
  parent: 'string',
  worksFor: {
    type: 'Organization',
    name: 'string'
  },
  address: {
    type: 'PostalAddress',
    streetAddress: 'string',
    addressLocality: 'string',
    addressRegion: 'string',
    postalCode: 'string',
    addressCountry: 'string'
  },
  sameAs: ['string', 'string']
};
```

</details>

<details>

<summary>Product</summary>

### Product Schema Markup Type

```javascript
const product = {
  type: 'Product',
  id: 'string',
  name: 'string',
  image: 'string',
  description: 'string',
  brand: {
    type: 'Brand',
    name: 'string'
  },
  sku: 'string',
  gtin8: 'string',
  gtin13: 'string',
  gtin14: 'string',
  mpn: 'string',
  offers: {
    type: 'Offer',
    url: 'string',
    priceCurrency: 'string',
    price: 'string',
    priceValidUntil: 'date',
    availability: 'url',
    itemCondition: 'url'
  },
  aggregateRating: {
    type: 'AggregateRating',
    ratingValue: 'string',
    bestRating: 'string',
    worstRating: 'string',
    ratingCount: 'string',
    reviewCount: 'string'
  },
  review: [
    {
      type: 'Review',
      name: 'string',
      reviewBody: 'string',
      reviewRating: {
        type: 'Rating',
        ratingValue: 'string',
        bestRating: 'string',
        worstRating: 'string'
      },
      datePublished: 'date',
      author: { type: 'Person', name: 'string' },
      publisher: { type: 'Organization', name: 'string' }
    }
  ]
};
```

</details>

<details>

<summary>Recipe</summary>

### Recipe Schema Markup Type

```javascript
const recipe = {
  type: 'Recipe',
  id: 'string',
  name: 'string',
  image: ['url', 'url'],
  description: 'string',
  keywords: 'string',
  author: {
    type: 'Person',
    name: 'string'
  },
  datePublished: '2023-11-08',
  prepTime: 'string',
  cookTime: 'string',
  totalTime: 'string',
  recipeCategory: 'string',
  recipeCuisine: 'string',
  recipeYield: 'string',
  nutrition: {
    type: 'NutritionInformation',
    servingSize: 'string',
    calories: 'string',
    fatContent: 'string'
  },
  recipeIngredient: ['string', 'string'],
  recipeInstructions: [
    {
      type: 'HowToStep',
      name: 'string',
      text: 'string',
      url: 'url',
      image: 'url'
    }
  ],
  aggregateRating: {
    type: 'AggregateRating',
    ratingValue: 'string',
    bestRating: 'string',
    worstRating: 'string',
    ratingCount: 'string',
    reviewCount: 'string'
  },
  review: [
    {
      type: 'Review',
      name: 'string',
      reviewBody: 'string',
      reviewRating: {
        type: 'Rating',
        ratingValue: 'string',
        bestRating: 'string',
        worstRating: 'string'
      },
      datePublished: 'date',
      author: { type: 'Person', name: 'string' },
      publisher: { type: 'Organization', name: 'string' }
    }
  ],
  video: {
    type: 'VideoObject',
    name: 'string',
    description: 'string',
    thumbnailUrl: ['url', 'url'],
    uploadDate: 'date',
    contentUrl: 'url',
    embedUrl: 'url'
  }
};
```

</details>

<details>

<summary>Review</summary>

### Review Schema Markup Type

```javascript
const review = {
  type: 'Review',
  id: 'string',
  author: {
    type: 'string',
    name: 'string'
  },
  itemReviewed: {
    type: 'string',
    name: 'string'
  },
  reviewRating: {
    type: 'Rating',
    ratingValue: '5'
  },
  name: 'string',
  reviewBody: 'string',
  publisher: {
    type: 'Organization',
    name: 'string'
  }
};
```

</details>

<details>

<summary>Service</summary>

### Service Schema Markup Type

```javascript
const service = {
  type: 'Service',
  id: 'string',
  serviceType: 'string',
  provider: {
    type: 'string',
    name: 'string'
  },
  areaServed: {
    type: 'State',
    name: 'string'
  },
  hasOfferCatalog: {
    type: 'OfferCatalog',
    name: 'string',
    itemListElement: [
      {
        type: 'OfferCatalog',
        name: 'string',
        itemListElement: [
          {
            type: 'Offer',
            itemOffered: {
              type: 'Service',
              name: 'string'
            }
          },
          {
            type: 'Offer',
            itemOffered: {
              type: 'Service',
              name: 'string'
            }
          }
        ]
      }
    ]
  }
};
```

</details>

<details>

<summary>SocialMediaPosting</summary>

### SocialMediaPosting Schema Markup Type

```javascript
const socialMediaPosting = {
  type: 'string',
  id: 'string',
  potentialAction: 'string',
  url: 'string',
  publisher: { name: 'string', logo: 'string', type: 'string', id: 'string' },
  headline: 'string',
  datePublished: 'string',
  image: 'string',
  author: {
    name: 'string',
    url: 'string',
    type: 'string',
    id: 'string'
  },
  description: 'string',
  dateModified: 'string',
  sharedContent: [
    {
      type: 'string',
      headline: 'string',
      url: 'string',
      author: {
        type: 'string',
        name: 'string'
      }
    }
  ]
};
```

</details>

<details>

<summary>VideoObject</summary>

### VideoObject Schema Markup Type

```javascript
const videoObject = {
  type: 'VideoObject',
  id: 'string',
  name: 'string',
  description: 'string',
  thumbnailUrl: ['url', 'url'],
  uploadDate: 'date',
  duration: 'string',
  contentUrl: 'url',
  embedUrl: 'url',
  potentialAction: {
    type: 'SeekToAction',
    target: 'string={seek_to_second_number}',
    'startOffset-input': 'required name=seek_to_second_number'
  },
  publisher: {
    type: 'string',
    name: 'string',
    logo: 'url'
  }
};
```

</details>

<details>

<summary>WebPage</summary>

### WebPage Schema Markup Type

```javascript
const webPage = {
  type: 'string',
  id: 'string',
  name: 'string',
  description: 'string',
  image: 'string',
  breadcrumb: 'string',
  publisher: {
    type: 'string',
    name: 'string'
  },
  license: 'url'
};
```

</details>

<details>

<summary>WebSite</summary>

### WebSite Schema Markup Type

```javascript
const website = {
  type: 'WebSite',
  id: 'string',
  name: 'string',
  url: 'string',
  potentialAction: {
    type: 'SearchAction',
    target: '{search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};
```

</details>

## Contributing

We have taken the liberty of adding the most commonly used Schema Markup types from the spec. If there are some missing you wish to be added, feel free to create a PR. Contributions are welcome.

## License

Copyright ©2023 Operation Nation LLC. [See LICENSE](https://github.com/Operation-Nation/sanity-plugin-schema-markup/blob/main/LICENSE).

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)

with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)

on how to run this plugin with hotreload in the studio.
