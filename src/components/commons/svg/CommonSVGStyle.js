import styled from 'styled-components';

const CommonSVGStyle = styled.svg`
  color : ${props => (props.color ? props.color : (!props.selected
    ? 'rgba(27,31,35,.3)' : '#000000'))};
  fill: currentColor;
  padding-right : 5px;
  position : relative;
  top : 2px;
  display : inline-block;
  
  &:hover {
    color : ${props => props.hoverColor && props.hoverColor }
  }
`;

export default CommonSVGStyle;
