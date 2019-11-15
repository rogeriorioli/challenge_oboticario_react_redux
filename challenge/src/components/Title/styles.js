import styled from 'styled-components';

export const Tittle = styled.h1`
     
    display : block;
    text-align : center;
    text-transform : uppercase;
    font-weight : 400;
    padding : 30px 0; 
    position : relative;
    &:after {
        content : '';
        height: 2px;
        background: #ccc;
        position: absolute;
        width: 30%;
        left: 0;
        bottom: 46px;
    }
    &:before {
        content : '';
        height: 2px;
        background: #ccc;
        position: absolute;
        width: 30%;
        right: 0;
        bottom: 46px;
    }
    @media screen and (max-width: 769px){
        &:after {
        content : '';
        display : none;
    }
        &:before {
        content : '';
        display : none;
        }
    }
  
`;  
