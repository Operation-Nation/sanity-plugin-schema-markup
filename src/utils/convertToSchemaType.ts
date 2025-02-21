/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineType } from 'sanity';
import { DocumentIcon } from '@sanity/icons';
import { Pattern } from '../config';

export const lowerCaseFirstLetter = (str: string): string => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};
export const upperCaseFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const convertToSchemaType = (object: Pattern) => {
  const name = object['@type'];

  const mapType = (key: string, value: any) => {
    if (typeof key === 'string' && key?.includes('@')) {
      const getName = key.split('@')[1];
      const getTitle = upperCaseFirstLetter(getName);
      return { name: getName, title: getTitle, type: 'string', initialValue: value };
    }
    if (typeof value === 'string') {
      return { type: 'string' };
    }
    if (typeof value === 'number') {
      return { type: 'number' };
    }
    if (Array.isArray(value)) {
      return {
        type: 'array',
        of: value.map(val2 => mapType('', val2))
      };
    }
    if (typeof value === 'object') {
      return {
        type: 'object',
        fields: Object.entries(value).map(([key1, val]) => ({ name: key1, ...mapType(key1, val) }))
      };
    }
    return { type: 'string' };
  };

  return defineType({
    title: name,
    name: `${lowerCaseFirstLetter(name)}Type`,
    type: 'object',
    icon: DocumentIcon,
    fields: [
      ...Object.entries(object).map(([key, value]) => ({
        name: key,
        ...mapType(key, value)
      }))
    ],
    preview: {
      select: {
        prevName: 'name',
        title: 'title'
      },
      prepare(selection) {
        const { prevName, title } = selection;
        return {
          title: title || prevName || 'Untitled',
          subtitle: name,
          media: DocumentIcon
        };
      }
    }
  });
};
