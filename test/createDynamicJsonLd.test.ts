import createDynamicJsonLd from '../src/utils/createDynamicJsonLd';

const projectId = 'exampleProject';
const dataset = 'exampleDataset';
describe('createDynamicJsonLd', () => {
  test('should create JSON-LD with basic properties', () => {
    const schemaObj = {
      type: 'Product',
      name: 'Example Product',
      description: 'This is an example product.'
    };

    const result = createDynamicJsonLd(schemaObj, projectId, dataset);

    expect(result).toEqual({
      '@type': 'Product',
      name: 'Example Product',
      description: 'This is an example product.'
    });
  });

  test('should handle SeekToAction type in JSON-LD', () => {
    const schemaObj = {
      type: 'VideoObject',
      potentialAction: {
        type: 'SeekToAction',
        searchUrl: 'https://example.com/search'
      }
    };

    const result = createDynamicJsonLd(schemaObj, projectId, dataset);

    expect(result).toEqual({
      '@type': 'VideoObject',
      potentialAction: {
        '@type': 'SeekToAction',
        target: 'https://example.com/search={seek_to_second_number}',
        'startOffset-input': 'required name=seek_to_second_number'
      }
    });
  });

  test('should handle SearchAction type in JSON-LD', () => {
    const schemaObj = {
      type: 'WebSite',
      potentialAction: {
        type: 'SearchAction',
        searchUrl: 'https://example.com/search',
        optionalString: '&filter=true'
      }
    };

    const result = createDynamicJsonLd(schemaObj, projectId, dataset);

    expect(result).toEqual({
      '@type': 'WebSite',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://example.com/search{search_term_string}&filter=true',
        'query-input': 'required name=search_term_string'
      }
    });
  });

  test('should handle AggregateRating type in JSON-LD with reviews', () => {
    const schemaObj = {
      type: 'Product',
      aggregateRating: {
        type: 'AggregateRating',
        ratingValue: '6',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '2',
        reviewCount: '2'
      },
      review: [
        {
          _type: 'productReviewType',
          type: 'Review',
          name: 'John Doe',
          reviewRating: { ratingValue: '4', bestRating: '5', worstRating: '1' },
          datePublished: new Date('2023-11-15'),
          author: { type: 'Person', name: 'John Doe' },
          publisher: { type: 'Organization', name: 'Operation Nation' }
        },
        {
          _type: 'productReviewType',
          type: 'Review',
          name: 'Camelia Roy',
          reviewRating: { ratingValue: '2', bestRating: '5', worstRating: '1' },
          datePublished: new Date('2023-11-15'),
          author: { type: 'Person', name: 'Camelia Roy' },
          publisher: { type: 'Organization', name: 'Operation Nation' }
        }
      ]
    };

    const result = createDynamicJsonLd(schemaObj, projectId, dataset);

    expect(result).toEqual({
      '@type': 'Product',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '6',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '2',
        reviewCount: '2'
      },
      review: [
        {
          '@type': 'Review',
          name: 'John Doe',
          reviewRating: { ratingValue: '4', bestRating: '5', worstRating: '1' },
          datePublished: '2023-11-14',
          author: { '@type': 'Person', name: 'John Doe' },
          publisher: { '@type': 'Organization', name: 'Operation Nation' }
        },
        {
          '@type': 'Review',
          name: 'Camelia Roy',
          reviewRating: { ratingValue: '2', bestRating: '5', worstRating: '1' },
          datePublished: '2023-11-15',
          author: { '@type': 'Person', name: 'Camelia Roy' },
          publisher: { '@type': 'Organization', name: 'Operation Nation' }
        }
      ]
    });
  });

  test('should handle value with logo property in JSON-LD', () => {
    const schemaObj = {
      type: 'Article',
      headline: 'article-headline',
      publisher: {
        type: 'Organization',
        name: 'publisher-name',
        logo: {
          asset: {
            _ref: 'image-94ae271bfb22020e0003c4e2990f02f6e20c95f4-812x127-png'
          }
        }
      }
    };

    const result = createDynamicJsonLd(schemaObj, projectId, dataset);

    const imgUrl =
      'https://cdn.sanity.io/images/exampleProject/exampleDataset/94ae271bfb22020e0003c4e2990f02f6e20c95f4-812x127.png?fit=max&auto=format'; // Assuming this is the resolved URL
    expect(result).toEqual({
      '@type': 'Article',
      headline: 'article-headline',
      publisher: {
        '@type': 'Organization',
        name: 'publisher-name',
        logo: imgUrl
      }
    });
  });
  test('should handle image type in JSON-LD', () => {
    const schemaObj = {
      type: 'HowTo',
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-94ae271bfb22020e0003c4e2990f02f6e20c95f4-812x127-png'
        }
      }
    };

    const result = createDynamicJsonLd(schemaObj, projectId, dataset);

    const imgUrl =
      'https://cdn.sanity.io/images/exampleProject/exampleDataset/94ae271bfb22020e0003c4e2990f02f6e20c95f4-812x127.png?fit=max&auto=format'; // Assuming this is the resolved URL
    expect(result).toEqual({
      '@type': 'HowTo',
      image: imgUrl
    });
  });
  test('should handle mainImage type in JSON-LD', () => {
    const schemaObj = {
      type: 'HowTo',
      image: {
        _type: 'mainImage',
        asset: {
          _ref: 'image-94ae271bfb22020e0003c4e2990f02f6e20c95f4-812x127-png'
        }
      }
    };

    const result = createDynamicJsonLd(schemaObj, projectId, dataset);

    const imgUrl =
      'https://cdn.sanity.io/images/exampleProject/exampleDataset/94ae271bfb22020e0003c4e2990f02f6e20c95f4-812x127.png?fit=max&auto=format'; // Assuming this is the resolved URL
    expect(result).toEqual({
      '@type': 'HowTo',
      image: imgUrl
    });
  });
  test('should handle array of strings in JSON-LD', () => {
    const schemaObj = {
      type: 'Organization',
      sameAs: ['https://www.facebook.com', 'https://linkedin.com', 'https://www.youtube.com/']
    };

    const result = createDynamicJsonLd(schemaObj, projectId, dataset);

    expect(result).toEqual({
      '@type': 'Organization',
      sameAs: ['https://www.facebook.com', 'https://linkedin.com', 'https://www.youtube.com/']
    });
  });

  test('should handle ListItem type in JSON-LD', () => {
    const schemaObj = {
      type: 'BreadcrumbList',
      itemListElement: [
        {
          type: 'ListItem',
          id: 'item1',
          name: 'Item 1'
        },
        {
          type: 'ListItem',
          id: 'item2',
          name: 'Item 2'
        }
      ]
    };

    const result = createDynamicJsonLd(schemaObj, projectId, dataset);

    expect(result).toEqual({
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@id': 'item1',
          position: 1,
          '@type': 'ListItem',
          name: 'Item 1'
        },
        {
          '@id': 'item2',
          position: 2,
          '@type': 'ListItem',
          name: 'Item 2'
        }
      ]
    });
  });
});
