import styled from "styled-components";
import Anchor from "../commons/Anchor";

const IssueAnchor = styled(Anchor)`

   font-weight: 550;
   color:#24292e;
   display: inline-block;
   font-size : 16px;
   width : 75%;
   
   &:hover {
     color : #0366d6;
     text-decoration : none;
   }
`;

export default IssueAnchor;
