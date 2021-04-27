import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";
import styled from "styled-components";
import {Question2Img} from "../../shared/svg/Questions/Question2Img";

const ImgWrapper = styled.div`
    width: 61.8666vw;
    height: 17.5868vh;
    max-height: 130px;
    padding-top: 4.38vh;
    z-index: -1;
    overflow: hidden;
    @media screen and (min-width: 640px){
          position: absolute;
          bottom: 0;
          right: 5.208333vw;
          height: 17.554688vh;
          width: 41.5364vw;
    }
    @media screen and (min-width: 1100px){
          right: auto;
          left: calc(801px + 6.1567vw);
          height: 43vh;
          width: 44.52777vw;
          max-width: 515px;
    }
`

const MobileWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: -55px;
    height:fit-content;
`


const Question2 = () => {
    return <QuestionWrapper question={getQuestionById("2")}>
        <MobileWrapper>
            <ImgWrapper>
                <Question2Img />
            </ImgWrapper>
        </MobileWrapper>
    </QuestionWrapper>
}

export default Question2;