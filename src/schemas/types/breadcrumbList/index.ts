import { defineType, defineField } from 'sanity';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
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
  ],
  preview: {
    select: {
      items: 'itemListElement'
    },
    prepare(selection) {
      const { items } = selection;
      const mapListItems = items?.map((item: { name: string }) => item.name).join(' / ');
      return {
        title: mapListItems || 'No ListItem',
        subtitle: 'BreadcrumbList',
        media: MdKeyboardDoubleArrowRight
      };
    }
  }
});

export default breadcrumbList;
