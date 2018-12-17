import React from 'react';
import renderer from 'react-test-renderer';
import CommentSVG from '../../../../components/commons/svg/CommentSVG';

it('renders correctly', () => {
  const tree = renderer
    .create(<CommentSVG />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
