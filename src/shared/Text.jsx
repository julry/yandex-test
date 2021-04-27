import styled from 'styled-components';

export const MainText = styled.p`
    font-size: 16px;
    line-height: 23px;

    @media all and (min-width: 640px){
        font-size: 22px;
        line-height: 35px;
    }
`

export const BoldMainText = styled(MainText)`
    font-weight: 500;
`

export const Text = styled.p`
    font-size: 13px;
    line-height: 132%;
     @media all and (min-width: 640px){
        font-size: 18px;
    }
    
`
