import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../../components/header/Header';

it('renders correctly', () => {
  const headerValues = {
    name: 'React',
    html_url: 'https://github.com/facebook/react',
    owner: {
      login: 'Facebook',
      url: 'https://github.com/facebook',
    },
    stargazers_count: 100000,
    subscribers_count: 34567,
    forks_count: 5643,
  };
  const tree = renderer
    .create(<Header {...headerValues} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
