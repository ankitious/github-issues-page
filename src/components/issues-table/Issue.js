/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IssueOpenedSVG from '../commons/svg/IssueOpenedSVG';
import { getDifference } from '../commons/getTimeDifference';
import Labels from './Labels';
import { OWNER, REPO, WEB_URL } from '../../api/constants';
import IssueAnchor from './IssueAnchor';
import IssueWrapper from './IssueWrapper';
import IssueAnchorNTitleWrapper from './IssueAnchorNTitleWrapper';
import IssueOpenedBy from './IssueOpenedBy';


const IssueOpenedIconWrapper = styled.div`
  padding : 8px 0px 0px 16px;
  display: inline-block;
`;


export const UserAnchor = styled.a`
   text-decoration : none;
   color : #586069;
   
   &:hover {
     color : #0366d6;
   }
`;

const IssueAnchorWithLabel = styled.div`
 width : 75%;
`;

const Issue = ({
  issue: {
    title, number, created_at, user: { login }, labels,
  },
}) => (
  <IssueWrapper>
    <IssueAnchorNTitleWrapper>
      <IssueOpenedIconWrapper>
        <IssueOpenedSVG color="#28a745" />
      </IssueOpenedIconWrapper>
      <IssueAnchorWithLabel>
        <IssueAnchor to={`${number}`} color="#24292e" href={`${WEB_URL}/${OWNER}/${REPO}/issues/${number}`}>
          {' '}
          {title}
        </IssueAnchor>
        <Labels labels={labels} />
      </IssueAnchorWithLabel>
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

export default Issue;


Issue.propTypes = {
  issue:
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        user:
          PropTypes.shape({
            login: PropTypes.string.isRequired,
          }).isRequired,
        created_at: PropTypes.string.isRequired,
        labels: PropTypes.array.isRequired,
      },
    ).isRequired,
};
