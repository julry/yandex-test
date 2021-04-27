import styled from 'styled-components';

export const Button = styled.button`
    padding: 16px 44px;
    cursor:pointer;
    background-color: #FECC00;
    outline: none;
    border: none;
    font-size: 18px;
    border-radius: 5px;
    @media all and (max-width: 325px){
        padding: 18px 35px;
        font-size: 16px;
    } 
    @media all and (max-width: 300px){
        padding: 20px 20px;
        font-size: 14px;
    }
`
