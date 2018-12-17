import React from 'react';
import renderer from 'react-test-renderer';
import SubNav from '../../../components/search-subnav/SubNav';

it('renders correctly', () => {
  const tree = renderer
    .create(<SubNav />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
