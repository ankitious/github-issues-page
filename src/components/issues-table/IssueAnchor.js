import styled from 'styled-components';
import { Link } from 'react-router-dom';

const IssueAnchor = styled(Link)`

   font-weight: 550;
   color:#24292e;
   display: inline-block;
   font-size : 16px;
   padding-left: 4px;
   word-break: break-word;
   text-decoration: none;
   
   &:hover {
     color : #0366d6;
     text-decoration : none;
   }
`;

export default IssueAnchor;
