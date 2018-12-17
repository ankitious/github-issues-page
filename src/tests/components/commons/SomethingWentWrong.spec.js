import React from 'react';
import renderer from 'react-test-renderer';
import SomethingWentWrong from '../../../components/commons/SomethingWentWrong';

it('renders correctly', () => {
  const tree = renderer
    .create(<SomethingWentWrong />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
