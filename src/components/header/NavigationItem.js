import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import CodeSVG from '../commons/svg/CodeSVG';
import IssueOpenedSVG from '../commons/svg/IssueOpenedSVG';
import PrSVG from '../commons/svg/PrSVG';
import ProjectSVG from '../commons/svg/ProjectSVG';
import InsightsSVG from '../commons/svg/InsightsSVG';

const NavigationItemWrapper = styled.div`
    border: 1px solid transparent;
    border-radius: 3px 3px 0 0;
    border-top: 3px solid transparent;
    color: ${props => (props.selected ? '#24292e' : '#586069')};
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

const NavigationItemAnchor = styled.a`
    text-decoration : none;
    color : #586069;
`;

const NavigationItem = ({
  name, selected, value, url,
}) => (
  <NavigationItemWrapper selected={selected}>
    {name === 'Code' && <CodeSVG /> }
    {name === 'Issues' && <IssueOpenedSVG selected />}
    {name === 'Pull Requests' && <PrSVG />}
    {name === 'Projects' && <ProjectSVG />}
    {name === 'Insights' && <InsightsSVG />}
    <NavigationItemAnchor href={url}>{name}</NavigationItemAnchor>
    { value
      ? <NavigationItemValue>{value}</NavigationItemValue>
      : <span>{value}</span>
    }
  </NavigationItemWrapper>
);

export default NavigationItem;


NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  value: PropTypes.number,
  url: PropTypes.string,
};

NavigationItem.defaultProps = {
  value: undefined,
    url : undefined,
};
