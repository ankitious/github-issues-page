/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { fetchIssueDetail } from '../../api/fetchIssueDetail';
import {GIT_ISSUE_ENDPOINT, OWNER, REPO, WEB_URL} from '../../api/constants';
import styled from 'styled-components';
import IssueOpenedSVG from "../commons/svg/IssueOpenedSVG";
import {getDifference} from "../commons/getTimeDifference";
import {UserAnchor} from "../issues-table/Issue";
import IssueDetailHeader from "./IssueDetailHeader";
import IssueNumber from "./IssueNumber";
import StateButton from "./StateButton";
import WhoOpenedIssueAndWhen from "./WhoOpenedTheIssueAndWhen";
import LoaderComponent from "../commons/LoaderComponent";
import SomethingWentWrong from "../commons/SomethingWentWrong";


const IssueInformation = styled.div`
       margin: 10px 0px;
`;

const IssueDetailContainer = styled.div``;

class IssueDetail extends Component {
    state = {issue : {}, error : ''};
    componentDidMount() {
        const {
          match: { params: { id } },
        } = this.props;
        console.log(id);
        fetchIssueDetail(`${GIT_ISSUE_ENDPOINT}/${id}`).then((response) => {
          this.setState({ issue: response.data });
        },
        (error) => {
          this.setState({error});
        });
  }

  render() {
    const {
      issue, error,
    } = this.state;
    console.log(issue);
    return (
      <div>
          {
          Object.keys(issue).length > 0 ?
              <IssueDetailContainer>

                  <IssueDetailHeader>
                      <span>{issue.title}</span>
                  <IssueNumber>#{issue.number}</IssueNumber>
                  </IssueDetailHeader>

                  <IssueInformation>
                  <StateButton>
                      <IssueOpenedSVG/>
                      {issue.state}
                  </StateButton>
                  <WhoOpenedIssueAndWhen>
                      <UserAnchor style={{ fontWeight: 'bold'}} href={`${WEB_URL}/${OWNER}/${REPO}/issues/created_by/${issue.user.login}`}>
                          {issue.user.login}
                          {' '}
                      </UserAnchor>
                      opened this issue {getDifference(issue.created_at)} {' '} ago
                      {' '} · {issue.comments} comments
                  </WhoOpenedIssueAndWhen>
                  </IssueInformation>

              </IssueDetailContainer> :

              <LoaderComponent/>

          }
          {!!error && <SomethingWentWrong/>}
      </div>
    );
  }
}


export default IssueDetail;



