import React from 'react';
import styled from 'styled-components';
import IssueOpenedSVG from '../commons/svg/IssueOpenedSVG';
import Anchor from '../commons/Anchor';
import { getDifference } from '../commons/getTimeDifference';
import Labels from "./Labels";
import { GIT_ISSUE_ENDPOINT } from '../../api/constants';



const IssueOpenedIconWrapper = styled.div`
  padding : 8px 0px 0px 16px;
  display: inline-block;
`;


const IssueAnchor = styled(Anchor)`

   font-weight: 550;
   color:#24292e;
   display: inline-block;
   font-size : 16px;
   width : 75%;
   
   &:hover {
     color : #0366d6;
     text-decoration : none;
   }
`;

const IssueAnchorNTitleWrapper = styled.div`
  display : flex;
  flex-direction : row;
  align-items: baseline;
  padding-top: 2px;
`;

const IssueWrapper = styled.div`
   border :  1px solid #e1e4e8;
   background-color : #fff;
   font-size:16px;
   display : flex;
   flex-direction : column;
   
   &:hover {
     background-color : #f6f8fa;
   }
`;

const IssueOpenedBy = styled.div`
   font-size : 12px;
   color : #586069;
   line-height: 1.25;
   margin-top: 0.3%;
   margin-left : 3%;
   padding-bottom: 8px;
`;

const Issue = (props) => {
  const {
    title, number, created_at, user: { login }, labels,
  } = props.issue;
  return (
    <IssueWrapper>
      <IssueAnchorNTitleWrapper>
        <IssueOpenedIconWrapper>
          <IssueOpenedSVG color="#28a745" />
        </IssueOpenedIconWrapper>
        <IssueAnchor color="#24292e">
          {' '}
          {title}
          <Labels labels={labels} />
        </IssueAnchor>
      </IssueAnchorNTitleWrapper>

      <IssueOpenedBy>
        <span>
#
          {number}
          {' '}

opened
          {' '}
          {getDifference(created_at)}
          {' '}
          ago by
          {' '}
          <Anchor href={`https://github.com/facebook/react/issues/created_by/${login}`}>
            {login}
          </Anchor>
        </span>

      </IssueOpenedBy>

    </IssueWrapper>);
};

export default Issue;
