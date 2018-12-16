import React from 'react';
import styled from 'styled-components';
import Anchor from '../commons/Anchor';
import RepoDetail from '../commons/RepoDetail';
import NavigationItem from './NavigationItem';
import Nav from './Nav';
import Navmenus from './Navmenus';
import RepoLogoSVG from '../commons/svg/RepoLogoSVG';
import {OWNER, REPO, WEB_URL} from "../../api/constants";

const navigationValues = [
  { name: 'Code', value: '', selected: false, url : `${WEB_URL}/${OWNER}/${REPO}` },
  { name: 'Issues', value: 253, selected: true },
  { name: 'Pull Requests', value: 72, selected: false, url : `${WEB_URL}/${OWNER}/${REPO}/pulls` },
  { name: 'Projects', value: 2, selected: false , url : `${WEB_URL}/${OWNER}/${REPO}/projects` },
  { name: 'Insights', value: '', selected: false, url : `${WEB_URL}/${OWNER}/${REPO}/insights` },
];


const PathDivider = styled.span`
  margin: 0 .25em;
`;

const RightNav = styled.div`
   @media (max-width: 820px) {
    display : none;
   }
`;


const Header = ({
    name ,
    html_url,
    owner : { login , url },
    stargazers_count,
    subscribers_count,
    forks_count
  }) => (
  <Nav>
    <Navmenus row="first">
      <div>
        <RepoLogoSVG />
        <Anchor
          href={url}
          color="#0366d6"
        >
          {login}
        </Anchor>
        <PathDivider>/</PathDivider>
        <Anchor
          color="#0366d6"
          fontWeight="bold"
          href={html_url}
        >
          {name}
        </Anchor>
      </div>
      <RightNav>
        <RepoDetail tag="Watch" value={subscribers_count} />
        <RepoDetail tag="Star" value={stargazers_count} />
        <RepoDetail tag="Fork" value={forks_count} />
      </RightNav>
    </Navmenus>

    <Navmenus row="second">
      {
        navigationValues.map(item => (
          <NavigationItem
            key={item.name}
            {...item}
          />
        ))
      }
    </Navmenus>
  </Nav>
);


export default Header;
