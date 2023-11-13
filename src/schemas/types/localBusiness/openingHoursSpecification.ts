import { defineField } from 'sanity';

const openingHoursSpecification = defineField({
  name: 'openingHoursSpecification',
  title: 'Add Opening Hours',
  type: 'array',
  of: [
    {
      title: 'Add Opening Hours',
      name: 'openingHoursSpecification',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
          hidden: true,
          initialValue: 'OpeningHoursSpecification'
        }),
        defineField({
          name: 'dayOfWeek',
          title: 'Day(s) of week',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: [
              {
                title: 'Monday',
                value: 'Monday'
              },
              {
                title: 'Tuesday',
                value: 'Tuesday'
              },
              {
                title: 'Wednesday',
                value: 'Wednesday'
              },
              {
                title: 'Thursday',
                value: 'Thursday'
              },
              {
                title: 'Friday',
                value: 'Friday'
              },
              {
                title: 'Saturday',
                value: 'Saturday'
              },
              {
                title: 'Sunday',
                value: 'Sunday'
              }
            ]
          }
        }),
        defineField({
          name: 'opens',
          title: 'Opens at (e.g. 08:00)',
          // @todo add custom time component
          type: 'string'
        }),
        defineField({
          name: 'closes',
          title: 'Closes at (e.g. 17:30)',
          // @todo add custom time component
          type: 'string'
        })
      ]
    }
  ]
});

export default openingHoursSpecification;
