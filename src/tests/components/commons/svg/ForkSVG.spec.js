import React from 'react';
import renderer from 'react-test-renderer';
import ForkSVG from '../../../../components/commons/svg/ForkSVG';

it('renders correctly', () => {
  const tree = renderer
    .create(<ForkSVG />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
