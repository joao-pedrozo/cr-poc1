import styled from 'styled-components';

export const Wrapper = styled.div`
    h1 {
        margin-bottom: 15px;
    }
`;

export const HeaderLeftSide = styled.div``;

export const HeaderBottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const WhatIsItForWrapper = styled.div`
    display: flex;
    max-width: 400px;

    span {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }
`;

export const HeaderMiddle = styled.div`
`;

export const HeaderMiddleSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 0;
    } 
`;
