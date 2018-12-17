import React from 'react';
import renderer from 'react-test-renderer';
import RepoDetail from '../../../components/commons/RepoDetail';

it('renders correctly', () => {
  const tree = renderer
    .create(<RepoDetail tag="Test" value="snapshot" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
