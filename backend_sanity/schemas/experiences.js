export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [{ type: 'workExperience' }],
    },
  ],
  orderings: [
    {
      title: 'Year',
      name: 'year',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};
