import React from 'react';
import styled from 'styled-components';
import Anchor from "../commons/Anchor";
import RepoDetail from "../commons/RepoDetail";
import NavigationItem from "./NavigationItem";
import Nav from "./Nav";
import Navmenus from "./Navmenus";
import RepoLogoSVG from "../commons/svg/RepoLogoSVG";

const navigationValues = [
  {name : 'Code', value : '', selected : false},
  {name : 'Issues', value : 253, selected : true},
  {name : 'Pull Requests', value : 72, selected : false},
  {name : 'Projects', value : 2 , selected : false},
  {name : 'Insights', value : '', selected : false}
  ];


const PathDivider = styled.span`
  margin: 0 .25em;
`;

const RightNav = styled.div`
   @media (max-width: 820px) {
    display : none;
   }
`;


const Header = () =>
  <Nav>
   <Navmenus row={'first'}>
    <div>
      <RepoLogoSVG/>
      <Anchor
        href={'https://github.com/facebook'}
        color={'#0366d6'}>
           facebook
      </Anchor>
      <PathDivider>/</PathDivider>
      <Anchor
        color={'#0366d6'}
        fontWeight={"bold"}
        href={'https://github.com/facebook/create-react-app'}>
            create-react-app
      </Anchor>
    </div>
    <RightNav>
      <RepoDetail tag={"Watch"} value={1741}/>
      <RepoDetail  tag={"Star"} value={60577}/>
      <RepoDetail  tag={"Fork"} value={13193}/>
    </RightNav>
  </Navmenus>

    <Navmenus row={'second'}>
      {
        navigationValues.map(item =>
             <NavigationItem
                name={item.name}
                value={item.value}
                selected={item.selected}
             />)
      }
    </Navmenus>
</Nav>;


export default Header;
