import styled from 'styled-components';

export const Wrapper = styled.div`

`;

export const WhatIsItForWrapper = styled.div`
    display: flex;

    span {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        margin-top: 15px;
    }
`;