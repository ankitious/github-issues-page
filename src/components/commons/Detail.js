import React from 'react';
import styled from 'styled-components';
import WatchSVG from "./svg/WatchSVG";
import StarSVG from "./svg/StarSVG";
import ForkSVG from "./svg/ForkSVG";
import Caret from "./Caret";

const DetailContainer = styled.div`
  display: inline-block;
  margin:5px;
  font-size: 12px;
  border-collapse : collapse;
  width : 100%;
`;

const DetailTagContainer = styled.span`
   border: 1px solid #cdcfd1;
   border-width: 1px 0px 1px 1px;
   padding: ${prop => prop.padding};
   font-weight : bold;
   border-radius : 2px 0px 0px 2px;
   background-color : ${prop => prop.backgroundColor};
   line-height: 20px;
   cursor : pointer;
   
   &:hover {
     background-color : ${prop => prop.backgroundColor};
   }
`;


const DetailValueContainer = styled.span`
   border: 1px solid #cdcfd1;
   padding: ${prop => prop.padding};
   font-weight : bold;
   border-radius : 0px 2px 2px 0px;
   line-height: 20px;
   cursor : pointer;
   background-color : ${prop => prop.backgroundColor};
`;



const Detail = (props) =>
  <DetailContainer>
    <DetailTagContainer
      backgroundColor={props.tagBackgroundColor}
      padding={props.tagPadding}
    >
      {props.tag}
      <Caret/>
    </DetailTagContainer>
    <DetailValueContainer
      backgroundColor={props.valueBackgroundColor}
      padding={props.valuePadding}
    >{props.value}
    </DetailValueContainer>
  </DetailContainer>;

export default Detail;
