import React from 'react';
import renderer from 'react-test-renderer';
import IssuesTableHeader from '../../../components/issues-table/IssuesTableHeader';

it('renders correctly', () => {
  const tree = renderer
    .create(<IssuesTableHeader />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
