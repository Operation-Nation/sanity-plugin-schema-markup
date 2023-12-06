import { Article } from './Article';
import { BreadcrumbList } from './BreadcrumbList';
import { FAQPage } from './FAQPage';
import { HowTo } from './HowTo';
import { ImageObject } from './ImageObject';
import { Organization } from './Organization';
import { Person } from './Person';
import { Product } from './Product';
import { Recipe } from './Recipe';
import { Service } from './Service';
import { SocialMediaPosting } from './SocialMediaPosting';
import { VideoObject } from './VideoObject';
import { WebPage } from './WebPage';
import { WebSite } from './WebSite';

export type Schema = Article &
  BreadcrumbList &
  FAQPage &
  HowTo &
  ImageObject &
  Organization &
  Person &
  Product &
  Recipe &
  Service &
  SocialMediaPosting &
  VideoObject &
  WebPage &
  WebSite;
