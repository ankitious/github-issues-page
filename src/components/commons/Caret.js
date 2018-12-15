import styled from 'styled-components';

const Caret = styled.span`
    padding: 0px 5px;
    
    &:after {
      border: 4px solid transparent;
      border-top-color: currentcolor;
      content: "";
      display: inline-block;
      height: 0;
      vertical-align: -2px;
      width: 0;
 }`;

export default Caret;
