import React, {useContext} from "react";
import styled from 'styled-components';
import {Logo} from "../shared/svg/Logo";
import {Button} from "../shared/Button";
import {MainText} from "../shared/Text";
import {ProgressContext} from "../contexts/ProgressContext";
import {IntroImg} from "../shared/svg/IntroImg";
import {IntroImgDesktop} from "../shared/svg/IntoImgDesktop";
import {reachMetrikaGoal} from "../utils/reachMetrikaGoal";

const Wrapper = styled.div`
      padding: 4.55665vh 9.86666vw 0;
      white-space: pre-wrap;
      max-width: 100%;
       @media all and (min-width: 1100px){ 
       padding: 7.8888vh 4.65277vw 0;
    }
`

const LogoStyled = styled(Logo)`
    width: 98px;
    @media all and (min-width: 1100px){ 
        width: 169px;
    }
`
const Title = styled.h1`
    font-size: 21px;
    line-height: 27px;
    margin: 3.9408vh 0 2.093596vh;
    
    @media all and (min-width: 1100px){ 
        margin: 4vh 0 5.665vh;
        font-size: 30px;
    }
`
const TextWrapper = styled.div`
    background-color: white;
    padding: 13px 16px 13px 23px;
    border-radius: 8px; 
    margin-bottom: 1.970443vh;
    
    @media all and (min-width: 640px){
        max-width: 460px;
    }
    @media all and (min-width: 1100px){
           max-width: 680px;
    }
`

const  TextMobile = styled.div`
    @media screen and (min-width: 640px){
        display: none;
    }
`

const  TextDesktop = styled.div`
    display: none;
    @media screen and (min-width: 640px){
        display: block;
    }
`

const StartBtn = styled(Button)`
 @media all and (min-width: 1100px){
      font-size: 24px;
  }
`

const ImgWrapperMobile = styled.div`
    margin-left: -37px;
    overflow: hidden;
    padding-top: 12.73vw;
    width: 100vw;
    height: 95vw;
    @media all and (min-width: 640px){ 
      display: none;
    }
`
const ImgWrapperDesktop = styled.div`
    display: none;
     @media all and (min-width: 640px){ 
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        height: 54.1vh;
        width: 90.1vw;
        overflow: hidden;
        z-index: -1;
    }
    @media all and (min-width: 1100px){ 
        width: 58.19444vw;
        padding-top: 1.2vw;
        height: 50.20833vw;
    }
`


const Intro = () => {
    const { setNext } = useContext(ProgressContext);

    const  onStart = () => {
        reachMetrikaGoal('start');
        setNext();
    }

    return <Wrapper>
        <LogoStyled />
        <Title>{"Карьерный тест от Яндекса"}</Title>
        <TextWrapper>
            <TextMobile>
                <MainText>
                    {"Все еще «ищешь себя»? Ответь на 8 вопросов о своих мечтах, целях и амбициях и узнай, насколько круто ты впишешься в роль передового бойца Яндекса.\nНет, речь не про IT-шников, ведь самое главное для Яндекса – довольные клиенты!\n" +
                    "Поехали!"}
                </MainText>
            </TextMobile>
            <TextDesktop>
                <MainText>
                    {"Все еще «ищешь себя»? \nОтветь на 8 вопросов о своих мечтах, целях и амбициях и узнай, насколько круто ты впишешься в роль передового бойца Яндекса.\nНет, речь не про IT-шников, ведь самое главное для Яндекса – довольные клиенты!\n" +
                    "Поехали!"}
                </MainText>
            </TextDesktop>
        </TextWrapper>
        <StartBtn onClick={onStart}>Пройти тест</StartBtn>
        <ImgWrapperMobile>
            <IntroImg />
        </ImgWrapperMobile>
        <ImgWrapperDesktop>
            <IntroImgDesktop />
        </ImgWrapperDesktop>
    </Wrapper>
}

export default Intro;