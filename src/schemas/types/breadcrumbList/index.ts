import { defineType, defineField } from 'sanity';
import itemListElement from './itemListElement';

const breadcrumbList = defineType({
  name: 'breadcrumbList',
  type: 'object',
  title: 'Breadcrumb List',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      hidden: true,
      initialValue: 'BreadcrumbList'
    }),
    defineField({
      name: 'id',
      title: 'Id',
      type: 'string'
    }),
    itemListElement
  ]
});

export default breadcrumbList;
