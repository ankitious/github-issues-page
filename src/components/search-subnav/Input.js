import styled from 'styled-components';

const Input = styled.input`
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    cursor: text;
    background-position: right 8px center;
    background-repeat: no-repeat;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 1px 2px rgba(27,31,35,.075);
    color: #24292e;
    line-height: 20px;
    min-height: 20px;
    outline: none;
    padding: 6px 8px;
    vertical-align: middle;
    font-size: 14px;
    background-color: #fafbfc;
    color: #586069;
    padding-left: 30px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    
    &:focus {
      background-color: #fff;
      border-color: #2188ff;
      box-shadow: inset 0 1px 2px rgba(27,31,35,.075), 
                  0 0 0 0.2em rgba(3,102,214,.3);
      outline: none;
    }
    
`;

export default Input;
