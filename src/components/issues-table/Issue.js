import React from 'react';
import styled from 'styled-components';
import IssueOpenedSVG from '../commons/svg/IssueOpenedSVG';
import Anchor from '../commons/Anchor';
import { getDifference } from '../commons/getTimeDifference';
import Labels from "./Labels";
import {GIT_ISSUE_ENDPOINT, OWNER, REPO, WEB_URL} from '../../api/constants';
import IssueAnchor from "./IssueAnchor";
import IssueWrapper from "./IssueWrapper";
import IssueAnchorNTitleWrapper from "./IssueAnchorNTitleWrapper";
import IssueOpenedBy from "./IssueOpenedBy";


const IssueOpenedIconWrapper = styled.div`
  padding : 8px 0px 0px 16px;
  display: inline-block;
`;


const UserAnchor = styled.a`
   text-decoration : none;
   color : #586069;
   
   &:hover {
     color : #0366d6;
   }
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
          <UserAnchor href={`${WEB_URL}/${OWNER}/${REPO}/issues/created_by/${login}`}>
            {login}
          </UserAnchor>
        </span>

      </IssueOpenedBy>

    </IssueWrapper>);
};

export default Issue;
