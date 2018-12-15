import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './header/Header';
import 'normalize.css';
import SubNav from './search-subnav/SubNav';
import Issue from './issues-table/Issue';
import IssuesContainer from '../containers/IssuesContainer';

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
        <Header />
        <IssueListingContainer>
          <SubNav />
          <IssuesContainer />
        </IssueListingContainer>
      </Container>
    );
  }
}

export default App;
