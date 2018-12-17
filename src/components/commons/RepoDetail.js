import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import WatchSVG from './svg/WatchSVG';
import StarSVG from './svg/StarSVG';
import ForkSVG from './svg/ForkSVG';
import Caret from './Caret';
import Detail from './Detail';

const RepoDetailContainer = styled.div`
  display: inline-block;
  margin:5px;
  font-size: 12px;
  border-collapse : collapse;
`;

const RepoDetailTagContainer = styled.span`
   border: 1px solid #cdcfd1;
   border-width: 1px 0px 1px 1px;
   padding: 5px 10px;
   font-weight : bold;
   border-radius : 2px 0px 0px 2px;
   background-color : #f4f7f9;
   line-height: 20px;
   cursor : pointer;
   
   &:hover {
     background-color : #e7eaed;
   }
`;

const RepoDetailValueContainer = styled.span`
   border: 1px solid #cdcfd1;
   padding: 5px 10px;
   font-weight : bold;
   border-radius : 0px 2px 2px 0px;
   line-height: 20px;
   cursor : pointer;
   background-color : #ffffff;
`;

const RepoDetail = ({ tag, value }) => (
  <RepoDetailContainer>
    <RepoDetailTagContainer>
      { tag === 'Watch' && <WatchSVG /> }
      { tag === 'Star' && <StarSVG /> }
      { tag === 'Fork' && <ForkSVG /> }

      {tag}
      <Caret />
    </RepoDetailTagContainer>
    <RepoDetailValueContainer>{value}</RepoDetailValueContainer>
  </RepoDetailContainer>
);


export default RepoDetail;

Detail.propTypes = {
  tag: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
