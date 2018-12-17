import React from 'react';
import renderer from 'react-test-renderer';
import Labels from '../../../components/issues-table/Labels';

it('renders correctly', () => {
  const labels = [{
    id: 123,
    color: 'red',
    name: 'Test Label 1',
  },
  {
    id: 132,
    color: 'green',
    name: 'Test Label 2',
  },
  ];
  const tree = renderer
    .create(<Labels labels={labels} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
