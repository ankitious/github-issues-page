import React, { Component } from 'react';
import Header from './header/Header';
import styled from 'styled-components';
import 'normalize.css';
import SubNav from "./search-subnav/SubNav";

const Container = styled.div`
  font-size : 18px;
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

        </IssueListingContainer>
      </Container>
    );
  }
}

export default App;
