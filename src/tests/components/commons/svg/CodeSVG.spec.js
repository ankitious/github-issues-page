import React from 'react';
import renderer from 'react-test-renderer';
import CodeSVG from '../../../../components/commons/svg/CodeSVG';

it('renders correctly', () => {
  const tree = renderer
    .create(<CodeSVG />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
