import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";
import styled from "styled-components";
import {Question4Img} from "../../shared/svg/Questions/Question4Img";

const ImgWrapper = styled.div`
    width: 100vw;
    height: 79.8666vw;
    padding-top: 4.38vh;
    z-index: -1;
    overflow: hidden;
    @media screen and (min-width: 640px){
        bottom: 0;
        position: absolute;
        left: auto;
        right: 5.208333vw;
        height: 53vh;
        width: 81vw;
    }
    @media screen and (min-width: 1100px){
        padding:0;
        right: auto;
        left: calc(801px + 1.1567vw);
        height: 34vw;
        max-height: 465px;
        width: 46.52777vw;
        max-width: 580px;
    }
`

const MobileWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: -55px;
    height:fit-content;
`

const Question4 = () => {
    return <QuestionWrapper question={getQuestionById("4")}>
        <MobileWrapper>
            <ImgWrapper>
                <Question4Img />
            </ImgWrapper>
        </MobileWrapper>
    </QuestionWrapper>
}

export default Question4;