import article from '../src/patterns/article';
import organization from '../src/patterns/organization';
import localBusiness from '../src/patterns/localBusiness';
import breadcrumb from '../src/patterns/breadcrumb';
import socialMediaPosting from '../src/patterns/socialMediaPosting';
import person from '../src/patterns/person';
import review from '../src/patterns/review';
import service from '../src/patterns/service';
import product from '../src/patterns/product';
import website from '../src/patterns/website';
import faqPage from '../src/patterns/faqPage';
import recipe from '../src/patterns/recipe';
import howTo from '../src/patterns/howTo';
import webPage from '../src/patterns/webPage';
import imageObject from '../src/patterns/imageObject';
import videoObject from '../src/patterns/videoObject';
import detectSchemaType from '../src/utils/detectSchemaType';

describe('detectSchemaType', () => {
  test('should return article schema type', () => {
    const schema = { type: 'NewsArticle' };
    const result = detectSchemaType(schema);
    expect(result).toBe(article);
  });

  test('should return organization schema type', () => {
    const schema = { type: 'Organization' };
    const result = detectSchemaType(schema);
    expect(result).toBe(organization);
  });

  test('should return local business schema type', () => {
    const schema = { type: 'Store' };
    const result = detectSchemaType(schema);
    expect(result).toBe(localBusiness);
  });

  test('should return breadcrumb schema type', () => {
    const schema = { type: 'BreadcrumbList' };
    const result = detectSchemaType(schema);
    expect(result).toBe(breadcrumb);
  });

  test('should return social media posting schema type', () => {
    const schema = { type: 'SocialMediaPosting' };
    const result = detectSchemaType(schema);
    expect(result).toBe(socialMediaPosting);
  });

  test('should return person schema type', () => {
    const schema = { type: 'Person' };
    const result = detectSchemaType(schema);
    expect(result).toBe(person);
  });

  test('should return product schema type', () => {
    const schema = { type: 'Product' };
    const result = detectSchemaType(schema);
    expect(result).toBe(product);
  });

  test('should return review schema type', () => {
    const schema = { type: 'Review' };
    const result = detectSchemaType(schema);
    expect(result).toBe(review);
  });

  test('should return service schema type', () => {
    const schema = { type: 'Service' };
    const result = detectSchemaType(schema);
    expect(result).toBe(service);
  });

  test('should return website schema type', () => {
    const schema = { type: 'WebSite' };
    const result = detectSchemaType(schema);
    expect(result).toBe(website);
  });

  test('should return faqPage schema type', () => {
    const schema = { type: 'FAQPage' };
    const result = detectSchemaType(schema);
    expect(result).toBe(faqPage);
  });

  test('should return recipe schema type', () => {
    const schema = { type: 'Recipe' };
    const result = detectSchemaType(schema);
    expect(result).toBe(recipe);
  });

  test('should return howTo schema type', () => {
    const schema = { type: 'HowTo' };
    const result = detectSchemaType(schema);
    expect(result).toBe(howTo);
  });

  test('should return webPage schema type', () => {
    const schema = { type: 'WebPage' };
    const result = detectSchemaType(schema);
    expect(result).toBe(webPage);
  });

  test('should return imageObject schema type', () => {
    const schema = { type: 'ImageObject' };
    const result = detectSchemaType(schema);
    expect(result).toBe(imageObject);
  });

  test('should return videoObject schema type', () => {
    const schema = { type: 'VideoObject' };
    const result = detectSchemaType(schema);
    expect(result).toBe(videoObject);
  });

  test('should return undefined for unknown schema type', () => {
    const schema = { type: 'UnknownType' };
    const result = detectSchemaType(schema);
    expect(result).toBeUndefined();
  });
});
