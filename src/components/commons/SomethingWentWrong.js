import React from 'react';
import styled from 'styled-components';
import { LoaderWrapper } from './LoaderComponent';


const SomethingWentWrongWrapper = styled(LoaderWrapper)``;

const SomethingWentWrongText = styled.h1`
 color : #ff6200;
`;
const SomethingWentWrong = () => (
  <SomethingWentWrongWrapper>
    {' '}
    <SomethingWentWrongText>Oops, Something went wrong!!!</SomethingWentWrongText>
  </SomethingWentWrongWrapper>
);

export default SomethingWentWrong;
