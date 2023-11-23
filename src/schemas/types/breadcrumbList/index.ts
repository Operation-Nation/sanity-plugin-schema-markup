import { defineType, defineField } from 'sanity';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import itemListElement from './itemListElement';
import id from '../../common/id';

const breadcrumbList = defineType({
  name: 'breadcrumbList',
  type: 'object',
  title: 'Breadcrumb List',
  icon: MdKeyboardDoubleArrowRight,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      hidden: true,
      initialValue: 'BreadcrumbList'
    }),
    id,
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
