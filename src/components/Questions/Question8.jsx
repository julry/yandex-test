import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";
import styled from "styled-components";
import {Question8Img} from "../../shared/svg/Questions/Question8Img";

const ImgWrapper = styled.div`
    padding-top: 60px;
    width: 83vw;
    height: 79vw;
    z-index: -1;
    overflow: hidden;
    @media screen and (min-width: 640px){
        position: absolute;
        bottom: 0;
        padding: 0;
        right: 5.208333vw;
        height: 31.8523vh;
        width: 56.8177vw;
    }
    @media screen and (min-width: 1100px){
            right: auto;
            padding: 0;
            left: calc(801px + 6.1567vw);
            height: 24.65277vw;
            width: 34.02777vw;
            max-width: 490px;
    }
`

const MobileWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: -55px;
    height:fit-content;
`
const Question8 = () => {
    return <QuestionWrapper question={getQuestionById("8")}>
        <MobileWrapper>
            <ImgWrapper>
                <Question8Img />
            </ImgWrapper>
        </MobileWrapper>
    </QuestionWrapper>
}

export default Question8;