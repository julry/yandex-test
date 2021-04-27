import React, {useEffect, useRef, useState} from "react";
import styled from 'styled-components';
import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import {Question1Img} from "../../shared/svg/Questions/Question1Img";


const MobileWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: -55px;
    height:fit-content;
`

const ImgWrapper = styled.div`
    height: 36.66vw;
    z-index: -1;
    overflow: hidden;
    width: 51vw;
    min-width: 150px;
    @media screen and (min-width: 640px){
          position: absolute;
          bottom: 0;
          right: 5.208333vw;
          height: 18.554688vh;
          width: 31.3802vw;
    }
    @media screen and (min-width: 1100px){
          right: auto;
          left: calc(801px + 7.1567vw);
          bottom: 8.333vh;
          height: 32.55555vh;
          max-height: 269px;
          width: 21.52777vw;
          max-width: 310px;
    }
`

const Question1 = () => {

    return <QuestionWrapper  question={getQuestionById("1")}>
        <MobileWrapper>
            <ImgWrapper>
                <Question1Img />
            </ImgWrapper>
        </MobileWrapper>
    </QuestionWrapper>
}

export default Question1;