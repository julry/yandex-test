import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";
import {Question3Img} from "../../shared/svg/Questions/Question3Img";
import styled from "styled-components";

const ImgWrapper = styled.div`
    width: 34.9333vw;
    height: 17.610837vh;
    padding-top: 2.38vh;
    z-index: -1;
    overflow: hidden;
    @media screen and (min-width: 640px){
            position: absolute;
            bottom: 0;
            right: 5.208333vw;
            height: 23.8523vh;
            width: 29.8177vw;
    }
    @media screen and (min-width: 1100px){
            right: auto;
            padding: 0;
            left: calc(801px + 6.1567vw);
            height: 24.65277vw;
            width: 25.90277vw;
            max-width: 373px;
    }
`

const MobileWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: -55px;
    height:fit-content;
    padding-right: 10vw;
`


const Question3 = () => {
    return <QuestionWrapper question={getQuestionById("3")}>
        <MobileWrapper>
            <ImgWrapper>
                <Question3Img />
            </ImgWrapper>
        </MobileWrapper>
    </QuestionWrapper>
}

export default Question3;