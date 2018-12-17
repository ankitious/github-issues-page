import React from 'react';
import renderer from 'react-test-renderer';
import InsightsSVG from '../../../../components/commons/svg/InsightsSVG';

it('renders correctly', () => {
  const tree = renderer
    .create(<InsightsSVG />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
