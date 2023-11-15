import { defineField } from 'sanity';

const id = defineField({
  name: 'id',
  title: '@id (optional)',
  description:
    'In schema markup, the @id is used to provide a unique identifier for an item, helping search engines understand and link related information on the web.',
  type: 'string'
});

export default id;
