import React from 'react';
import styled from 'styled-components';
import Detail from '../commons/Detail';
import SearchSVG from '../commons/svg/SearchSVG';
import Caret from '../commons/Caret';
import Input from './Input';
import FiltersContainer from './FiltersContainer';
import CreateNewIssueButton from './CreateNewIssueButton';
import { OWNER, REPO, WEB_URL } from '../../api/constants';

const SubNavContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  justify-content: space-between;
  
   @media (max-width: 820px) {
    flex-direction: column;
   }
`;

const SearchContainer = styled.div`
    display : inline-block;
    position : relative;
    
    @media (max-width: 820px) {
     margin-top : 10px;
    }
`;

const FilterNSearchContainer = styled.div`
  display : flex;
  alignItems : baseline;
  
  @media (max-width: 820px) {
    flex-direction: column;
   }
`;
const SubNav = () => (
  <SubNavContainer>
    <FilterNSearchContainer>
      <div>
        <FiltersContainer>
          Filters
          <Caret />
        </FiltersContainer>
        <SearchContainer>
          <Input type="text" defaultValue="is:issue is:open " />
          <SearchSVG />
        </SearchContainer>
      </div>

      <Detail
        tag="Labels"
        value="Milestones"
        tagBackgroundColor="#ffffff"
        valueBackgroundColor="#ffffff"
        tagPadding="9px 14px"
        valuePadding="9px 14px"
        tagHref={`${WEB_URL}/${OWNER}/${REPO}/labels`}
        valueHref={`${WEB_URL}/${OWNER}/${REPO}/milestones`}
      />

    </FilterNSearchContainer>

    <CreateNewIssueButton
      href={`${WEB_URL}/${OWNER}/${REPO}/issues/new`}
    >
      New issue
    </CreateNewIssueButton>

  </SubNavContainer>
);

export default SubNav;
