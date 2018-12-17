import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Label = styled.span`
    background-color : #${props => (props.bgColor
    ? props.bgColor : '#fff')};
    border-radius: 2px;
    box-shadow: inset 0 -1px 0 rgba(27,31,35,.12);
    font-size: 12px;
    font-weight: 600;
    height: 20px;
    line-height: 15px;
    padding: .15em 4px;
    margin-left : 2px;
`;

const LabelsWrapper = styled.span`
  &:hover{
    color : #24292e;
  } 
`;
const Labels = ({ labels }) => (
  <LabelsWrapper>
    {
      labels.length > 0
      && labels.map(({ id, color, name }) => (
        <Label
          key={id}
          bgColor={color}
        >
          {name}
        </Label>
      ))
    }
  </LabelsWrapper>
);

export default Labels;


Labels.propTypes = {

  labels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),

  ).isRequired,


};
