import styled from 'styled-components';

const Nav = styled.nav`
      background-color: #fafbfc;
      border-bottom: 2px solid #e1e4e8;
      width: 100%;
      -webkit-transition: height 0.2s ease-in-out;
      transition: height 0.2s ease-in-out;
      height: 89px;
      margin: 0 auto;
      margin-bottom : 20px;
      @media (max-width: 820px) {
        height: 77px;
      }
      @media (max-width: 600px) {
        height: 220px;
      }
      @media (max-width: 600px) {
        height: 240px;
      }   
`;

export default Nav;
