import React from 'react';
import renderer from 'react-test-renderer';
import NavigationItem from '../../../components/header/NavigationItem';
import { OWNER, REPO, WEB_URL } from '../../../api/constants';

it('renders correctly', () => {
  const navigationValues = [
    {
      name: 'Code', selected: false, url: `${WEB_URL}/${OWNER}/${REPO}`,
    },
    { name: 'Issues', value: 253, selected: true },
    {
      name: 'Pull Requests', value: 72, selected: false, url: `${WEB_URL}/${OWNER}/${REPO}/pulls`,
    },
    {
      name: 'Projects', value: 2, selected: false, url: `${WEB_URL}/${OWNER}/${REPO}/projects`,
    },
    {
      name: 'Insights', selected: false, url: `${WEB_URL}/${OWNER}/${REPO}/insights`,
    },
  ];
  const tree = renderer
    .create(<NavigationItem {...navigationValues} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
