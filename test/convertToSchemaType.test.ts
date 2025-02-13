import { convertToSchemaType } from '../src/utils/convertToSchemaType';
import { Pattern } from '../src/config';

describe('convertToSchemaType', () => {
  it('should convert a Pattern object to a Sanity schema type', () => {
    const pattern: Pattern = {
      '@type': 'TestType',
      '@id': 'testId',
      name: 'Test Name',
      age: 30,
      address: {
        '@type': 'Address',
        street: '123 Test St',
        city: 'Test City'
      }
    };

    const schemaType = convertToSchemaType(pattern);

    expect(schemaType.name).toBe('testTypeType');
    expect(schemaType.title).toBe('TestType');
    expect(schemaType.type).toBe('object');
    expect(schemaType.fields).toEqual(
      expect.arrayContaining([
        { name: 'type', type: 'string', initialValue: 'TestType', title: 'Type' },
        { name: 'id', type: 'string', initialValue: 'testId', title: 'Id' },
        { name: 'name', type: 'string' },
        { name: 'age', type: 'number' },
        {
          name: 'address',
          type: 'object',
          fields: [
            { name: 'type', type: 'string', initialValue: 'Address', title: 'Type' },
            { name: 'street', type: 'string' },
            { name: 'city', type: 'string' }
          ]
        }
      ])
    );
  });
});
