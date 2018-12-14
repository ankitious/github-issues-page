import styled from "styled-components";
import CodeSVG from "../commons/svg/CodeSVG";
import IssueOpenedSVG from "../commons/svg/IssueOpenedSVG";
import PrSVG from "../commons/svg/PrSVG";
import ProjectSVG from "../commons/svg/ProjectSVG";
import InsightsSVG from "../commons/svg/InsightsSVG";
import React from "react";

const NavigationItemWrapper = styled.div`
    border: 1px solid transparent;
    border-radius: 3px 3px 0 0;
    border-top: 3px solid transparent;
    color: ${props => props.selected ? '#24292e' : '#586069'};
    float: left;
    padding: 7px 15px 8px;
    white-space: nowrap;
    background-color : ${props => props.selected && '#fff'};
    border-color : ${props => props.selected && '#e36209 #e1e4e8 transparent'};
    cursor : pointer;
    &:hover {
     color : #000;
    }
  `;

const NavigationItemValue = styled.span`
    background-color: rgba(27,31,35,.08);
    border-radius: 20px;
    color: #000;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    padding: 2px 5px;
    margin-left: 2px;
`;

const NavigationItem = (props) =>
  <NavigationItemWrapper selected={props.selected}>
    {props.name === 'Code' && <CodeSVG/> }
    {props.name === 'Issues' && <IssueOpenedSVG selected />}
    {props.name === 'Pull Requests' && <PrSVG/>}
    {props.name === 'Projects' && <ProjectSVG/>}
    {props.name === 'Insights' && <InsightsSVG/>}
    <span>{props.name}</span>
    {  !!props.value ?
           <NavigationItemValue>{props.value}</NavigationItemValue> :
           <span>{props.value}</span>
    }
  </NavigationItemWrapper>;

export default NavigationItem;
