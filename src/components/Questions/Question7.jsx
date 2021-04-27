import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";
import styled from "styled-components";
import {Question7Img} from "../../shared/svg/Questions/Question7Img";

const ImgWrapper = styled.div`
    width: 62vw;
    height: 65.8666vw;
    padding-top: 4.38vh;
    z-index: -1;
    overflow: hidden;
    @media screen and (min-width: 640px){
        bottom: 0;
        position: absolute;
        left: auto;
        right: 6.208333vw;
        height: 50vh;
        width: 60vw;
    }
    @media screen and (min-width: 1100px){
        padding:0;
        right: 50px;
        height: 34vw;
        width: 33.52777vw;
        max-width: 450px;
    }
`

const MobileWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    height:fit-content;
`

const Question7 = () => {
    return <QuestionWrapper question={getQuestionById("7")}>
        <MobileWrapper>
            <ImgWrapper>
                <Question7Img />
            </ImgWrapper>
        </MobileWrapper>
    </QuestionWrapper>
}

export default Question7;