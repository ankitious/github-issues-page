import React from 'react';
import renderer from 'react-test-renderer';
import LoaderComponent from '../../../components/commons/LoaderComponent';

it('renders correctly', () => {
  const tree = renderer
    .create(<LoaderComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
