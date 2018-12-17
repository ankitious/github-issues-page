import React from 'react';
import renderer from 'react-test-renderer';
import Detail from '../../../components/commons/Detail';

it('renders correctly', () => {
  const tree = renderer
    .create(<Detail
      tagBackgroundColor="#fff"
      valueBackgroundColor="#fff"
      tagPadding="10px 10px"
      valuePadding="10px 10px"
      tag="Hey"
      value="test!"
      valueHref="http://github.com"
      tagHref="http://gitlab.com"
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
