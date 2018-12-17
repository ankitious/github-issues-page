import React from 'react';
import renderer from 'react-test-renderer';
import IssueOpenedSVG from '../../../../components/commons/svg/IssueOpenedSVG';

it('renders correctly', () => {
  const tree = renderer
    .create(<IssueOpenedSVG color="red" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
