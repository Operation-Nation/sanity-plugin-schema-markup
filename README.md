
# @operationnation/sanity-plugin-schema-markup

  

> This is a **Sanity Studio v3** plugin.

# What it is

The `@operationnation/sanity-plugin-schema-markup` is a Sanity Studio v3 plugin designed to simplify the process of generating schema markup for various types of content. This plugin is particularly useful for enhancing the structured data of your content, making it more accessible and understandable for search engines.

## Key Features

- **Schema Markup Generation:** The plugin allows you to easily generate schema markup for different types such as articles, recipes, reviews, and more.

- **Sanity Studio Integration:** Seamlessly integrate schema markup generation into your Sanity Studio workflow, making it a part of your content creation process.

- **Dynamic Schema Markup:** The plugin supports the dynamic creation of schema markup, enabling you to tailor the structured data based on your specific content and requirements.

- **Next.js Integration:** A provided example demonstrates how to implement schema markup in a Next.js project, showcasing a practical use case.

## Installation

To get started, install the plugin using npm:

```sh

npm install @operationnation/sanity-plugin-schema-markup

```

  

## Usage

  

Add it as a plugin in `sanity.config.ts` (or .js):

```ts

import  {defineConfig}  from  'sanity'
import  { schemaMarkup }  from  '@operationnation/sanity-plugin-schema-markup';

export  default defineConfig({
	plugins:  [schemaMarkup()],
})

```
Then, declare a field in your schema to be `schemaMarkup`
 

```javascript
const myDocument = {
  type: "document",
  name: "myDocument",
  fields: [
    {
      title: 'Schema Markup',
	  name: 'schemaMarkup',
	  type: 'schemaMarkup',
    }
  ]
}
```

## Next.js implementation example

```typescript
import { SchemaScript } from  '@operationnation/sanity-plugin-schema-markup';

type  Schema  = {
	[key: string]: string;
};

type  Props  = {
	schema: Schema[];
};
const  projectId  =  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const  dataset  =  process.env.NEXT_PUBLIC_SANITY_DATASET;

const  SchemaMarkup  = ({ schema }: Props) => {
return (
	<SchemaScript  schema={schema}  projectId={projectId  as  string}  dataset={dataset  as string}  />
	);
};

export  default  SchemaMarkup;
```


## Create schema markup script dynamically
To create the schema markup script you need follow the schema type patterns: 
[**Click here to see all schema patterns**](#all-schema-type-patterns)

```javascript 
import { createImgUrl } from '@operationnation/sanity-plugin-schema-markup';

const  projectId  =  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const  dataset  =  process.env.NEXT_PUBLIC_SANITY_DATASET;
const SchemaMarkup = ({ data, setting })=> {
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
			url: setting.domain
			},
		publisher: {
			type: 'Organization',
			name: setting.companyName,
			logo: setting.logo
			},
		image: data.images.map(image=>getImgUrl(image.asset._ref))
	};
	
	return (
	<SchemaScript  schema={[ articleSchemaType ]}  projectId={projectId  as  string}  dataset={dataset  as string}  />
	);
}
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
      '@type': 'HowToStep',
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

## License
MIT-licensed. See LICENSE.

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)

with default configuration for build & watch scripts.

 See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)

on how to run this plugin with hotreload in the studio.

