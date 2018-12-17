import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import IssueOpenedSVG from '../commons/svg/IssueOpenedSVG';
import { OWNER, REPO, WEB_URL } from '../../api/constants';
import CompletedSVG from '../commons/svg/CompletedSVG';
import Caret from '../commons/Caret';


const IssuesTableHeaderContainer = styled.div`
    background-color: #f6f8fa;
    border: 1px solid #e1e4e8;
    border-bottom: none;
    border-radius: 3px 3px 0 0;
    margin-top: 20px;
    position: relative;
    display : flex;
    flex-direction : row;
    cursor : ponter;
        align-items: center;
    justify-content : space-between;
    
      @media (max-width: 820px) {
        flex-direction : column;
      }
`;

const OpenClosedIssueDetails = styled.div`
     padding-left: 16px
`;

const OpenClosedIssueAnchor = styled.a`
    
    border: 1px solid transparent;
    border-radius: 3px 3px 0 0;
    border-top: 3px solid transparent;
    float: left;
    font-weight : ${props => (props.selected ? 'bold' : 'none')}
    padding: 13px 0px;
    white-space: nowrap;
    cursor : pointer;
    text-decoration : none;
    color : ${props => (props.selected ? '#24292e' : '#586069')};
    &:hover {
     color : #24292e;
    }
    
`;

const otherValues = ['Auther', 'Label', 'Projects', 'Milestones', 'Assignee', 'Sort'];

const DetailSpan = styled.span`
     padding-left: 15px;
     padding-right: 15px;
     padding-top: 5px;
     padding-bottom: 5px;
     color: #586069;
     &:hover {
     color : #24292e;
    }
`;
const OtherDetail = ({ value }) => (
  <DetailSpan>
    {value}
    {' '}
    <Caret />
    {' '}
  </DetailSpan>
);


const OtherDetails = styled.div`
   display : flex;
   flex-direction : row;
   
   @media (max-width: 820px) {
        flex-direction : column;
      }
   
`;


const IssuesTableHeader = () => (
  <IssuesTableHeaderContainer>
    <OpenClosedIssueDetails>
      <OpenClosedIssueAnchor
        selected
        href={`${WEB_URL}/${OWNER}/${REPO}/issues?q=is%3Aopen+is%3Aissue`}
      >
        <IssueOpenedSVG />
            253 Open
      </OpenClosedIssueAnchor>
      <OpenClosedIssueAnchor
        style={{ marginLeft: '10px' }}
        href={`${WEB_URL}/${OWNER}/${REPO}/issues?q=is%3Aopen+is%3Aissue`}
      >
        <CompletedSVG color="#586069" hoverColor="#24292e" />
            6378 closed
      </OpenClosedIssueAnchor>
    </OpenClosedIssueDetails>
    <OtherDetails>
      {otherValues.map(value => <OtherDetail key={value} value={value} />)}
    </OtherDetails>
  </IssuesTableHeaderContainer>
);

export default IssuesTableHeader;


OtherDetail.propTypes = {
  value: PropTypes.string.isRequired,
};
