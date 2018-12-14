import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
  color: ${props => props.color};
  font-family: helvetica;
  text-decoration: none;
  font-size : 18px;
  font-weight : ${props => !!props.fontWeight ? props.fontWeight : "none"}
  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: purple; 
  }
`;

export default Anchor;
