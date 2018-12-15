import React from 'react';
import styled from 'styled-components';

const DetailContainer = styled.div`
  display: inline-block;
  margin:7px 5px;
  font-size: 12px;
  border-collapse : collapse;
  
   @media (max-width: 820px) {
       margin : 15px 0px;
    } 
`;

const DetailTagContainer = styled.span`
   border: 1px solid #cdcfd1;
   border-width: 1px 0px 1px 1px;
   padding: ${prop => prop.padding};
   border-radius : 2px 0px 0px 2px;
   background-color : ${prop => prop.backgroundColor};
   line-height: 20px;
   cursor : pointer;
   font-weight : bold;
   color : #586069;
   &:hover {
     background-color : ${prop => prop.backgroundColor};
   }
`;


const DetailValueContainer = styled.span`
   border: 1px solid #cdcfd1;
   padding: ${prop => prop.padding};
   border-radius : 0px 2px 2px 0px;
   line-height: 20px;
   color : #586069;
   font-weight : bold;
   cursor : pointer;
   background-color : ${prop => prop.backgroundColor};

`;


const Detail = props => (
  <DetailContainer>
    <DetailTagContainer
      backgroundColor={props.tagBackgroundColor}
      padding={props.tagPadding}
    >
      {props.tag}
    </DetailTagContainer>
    <DetailValueContainer
      backgroundColor={props.valueBackgroundColor}
      padding={props.valuePadding}
    >
      {props.value}
    </DetailValueContainer>
  </DetailContainer>
);

export default Detail;
