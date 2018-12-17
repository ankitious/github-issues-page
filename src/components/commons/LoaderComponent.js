import React from 'react';

import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
 `;

export const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700px;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #fff;
    z-index: 10000;

`;

const Loader = styled.div`
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid green;
    width: 50px;
    height: 50px;
    animation: ${loadingAnimation} 2s linear infinite;
`;

const LoaderComponent = () => <LoaderWrapper><Loader /></LoaderWrapper>;

export default LoaderComponent;
