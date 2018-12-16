import styled from 'styled-components';

const CreateNewIssueButton = styled.a`
    background-color: #28a745;
    background-image: linear-gradient(-180deg,#34d058,#28a745 90%);
    color: #fff;
    text-decoration:none;
    background-position: -1px -1px;
    background-repeat: repeat-x;
    background-size: 110% 110%;
    border: 1px solid rgba(27,31,35,.2);
    border-radius: .25em;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 12px;
    position: relative;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    
    &:hover {
      background-color: #269f42;
      background-image: linear-gradient(-180deg,#2fcb53,#269f42 90%);
      background-position: -.5em;
      border-color: rgba(27,31,35,.5);
      background-repeat: repeat-x;
      text-decoration: none;
      outline-width: 0;
    }
       
`;

export default CreateNewIssueButton;
