import React from 'react';
import styled from 'styled-components';
import {AnswerType} from "../answerTypes.config";

const ImageWrapperStyled = styled.div`
    margin: 0 auto;
    overflow: hidden;
    ${({ styles }) => styles};
`;

const rectangleStyles = {
    [AnswerType.Analytics]: `
        width: 77.8666vw;
        padding-top: 6.280788vh;
        height: 31.157635vh;
        @media all and (min-width:640px) {
            width: 49.088542vw;
            padding-top: 3.222656vh;
            height: 26.9531vh;
        }
        @media all and (min-height: 640px) and (orientation: landscape) {
            width: 35.432vh;
            padding-top: 3.6666vh;
            height: 26.9531vh;
        }
        @media all and (min-width: 1100px) {
            width: 38vh;
            padding-top: 3.6666vh;
            height: 100%;
        }
    `,
    [AnswerType.Presenter]: `
        width: 78.13333vw;
        padding-top: 2.832512vh;
        height: 32.635468vh;
        @media all and (min-width:640px) {
            width: 40.104167vw;
            padding-top: 3.222656vh;
            height: 26.4648vh;
        }
        @media all and (min-height: 640px) and (orientation: landscape) {
            width: 27.432vh;
            padding-top: 3.6666vh;
            height: 26.4648vh;
        }
        @media all and (min-width: 1100px) {
            width: 35vh;
            padding-top: 0;
            height: 100%;
        }
    `,
    [AnswerType.Negotiator]: `
        width: 74.4vw;
        padding-top: 6.66502vh;
        height: 30.7881vh;
        @media all and (min-width:640px) {
            width: 43.8802vw;
            padding-top: 3.222656vh;
            height: 26.17vh;
        }
        @media all and (min-height: 640px) and (orientation: landscape) {
            width: 29.432vh;
            padding-top: 3.6666vh;
            height: 24vh;
        }
        @media all and (min-width: 1100px) {
            width: 35vh;
            padding-top: 4.333vh;
            height: 100%;
        }
    `,
    [AnswerType.Entrepreneur]: `
        width: 74.4vw;
        padding-top: 1vh;
        height: 26.7881vh;
        @media all and (min-width:640px) {
            width: 43.8802vw;
            padding-top: 0.222656vh;
            height: 26.17vh;
        }
        @media all and (min-height: 640px) and (orientation: landscape) {
            width: 24.432vh;
            padding-top: 3.6666vh;
            height: 24vh;
        }
        @media all and (min-width: 1100px) {
            width: 29vh;
            padding-top: 4.333vh;
            height: 100%;
        }
    `,
    [AnswerType.Intellectual]: `
        overflow: visible;
        z-index: 1;
        width: 60vw;
        height: 200px;
        position: relative;
        & svg{
             position: absolute;
             top:0;
             height: 222px;
             @media all and (min-width:640px) {
                   height: 281px;
             }
        }
        @media all and (min-width:640px) {
            width: 50%;
           height: 240px;
        }
        @media all and (min-height: 640px) and (orientation: landscape) {
            width: 24.432vh;
            padding-top: 3.6666vh;
        }
        @media all and (min-width: 1100px) {
            width: 29vh;
            padding-top: 4.333vh;
        }
    `,

};

export const ImageWrapper = ({ result, className }) => {
    return (
        <ImageWrapperStyled
            className={className}
            styles={rectangleStyles[result.type]}
        >
            {result.image()}
        </ImageWrapperStyled>
    );
};