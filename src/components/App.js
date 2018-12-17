import React, { Component } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import SubNav from './search-subnav/SubNav';
import HeaderContainer from '../containers/HeaderContainer';
import IssuesTable from './issues-table/IssuesTable';

const Container = styled.div`
  font-size : 14px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,
  Helvetica,Arial,sans-serif,Apple Color Emoji,
  Segoe UI Emoji,Segoe UI Symbol;
  margin : 0px;
  padding : 0px;
`;

const IssueListingContainer = styled.div`
  font-size : 14px;
  width : 88%;
  margin : 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <HeaderContainer />
        <IssueListingContainer>
          <SubNav />
          <IssuesTable />
        </IssueListingContainer>
      </Container>
    );
  }
}

export default App;
