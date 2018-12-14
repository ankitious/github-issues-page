import React from 'react';
import Detail from "../commons/Detail";
import SearchSVG from "../commons/svg/SearchSVG";
import styled from "styled-components";
import Caret from "../commons/Caret";

const SearchBar = (props) =>
  <span>
      <input
        type="text"
        value="is:issue is:open"
        />
        <SearchSVG/>
  </span>;

const SubNavContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FiltersContainer = styled.div`
    border: 1px solid rgba(27,31,35,.2);
    border-radius: .25em;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 12px;
    position: relative;
    vertical-align: middle;
    white-space: nowrap;
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    color: #444d56;
`;
const SubNav = () =>


  <SubNavContainer>
    <FiltersContainer>
      Filters
      <Caret />
    </FiltersContainer>

  </SubNavContainer>


;

export default SubNav;
