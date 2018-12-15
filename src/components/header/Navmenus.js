import styled from 'styled-components';

const Navmenus = styled.div` 
      display: flex;
      flex-direction: row;
      width: 88%;
      margin: 0 auto;
      padding-top : 10px;
      justify-content: ${props => props.row === 'first'
                       && 'space-between'};
      
      @media (max-width: 600px) {
          flex-direction : column
          padding : 0px;
      }
`;

export default Navmenus;
