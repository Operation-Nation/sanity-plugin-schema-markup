import { defineType, defineField } from 'sanity';
import { ListTree } from 'lucide-react';
import itemListElement from './itemListElement';
import id from '../../common/id';

const breadcrumbList = (name = 'breadcrumbList') => {
  return defineType({
    name,
    type: 'object',
    title: 'Breadcrumb List',
    icon: ListTree,
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
          media: ListTree
        };
      }
    }
  });
};

export default breadcrumbList;
