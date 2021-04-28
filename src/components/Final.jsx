import React, {useContext, useEffect, useState} from "react";
import styled from 'styled-components';
import {useResult} from "../hocs/useResult";
import {Text} from "../shared/Text";
import {getFeedback} from "../utils/getFeedback";
import {DownChevron} from "../shared/svg/DownChevron";
import {UpChevron} from "../shared/svg/UpChevron";
import {Button} from "../shared/Button";
import {DoubleForward} from "../shared/svg/DoubleForward";
import {feedbacks} from "../feedbacks.config";
import {DoubleBack} from "../shared/svg/DoubleBack";
import {ImageWrapper} from "./ResultPicture";
import {ProgressContext} from "../contexts/ProgressContext";
import {getAnswerById} from "../utils/getAnswerById";
import {reachMetrikaGoal} from "../utils/reachMetrikaGoal";

const Wrapper = styled.div`
    padding: 0 18px 3.694581vh;
    @media all and (min-width: 640px){
        padding: 0 34px 20px;
        max-width: 670px;
    }
    @media all and (min-width: 1100px){
        max-width: none;
        display: grid;
        padding: 0 34px 5px;
        grid-template-columns: minmax(52vw, 750px) auto;
        grid-template-rows: fit-content(24.3333vh) auto;
    }
`

const MainInfo = styled.div`
  @media all and (min-width: 1100px){
    grid-column: 1/2;
    grid-row: 2/3;
  }
`

const RoundBorderDiv = styled.div`
  background: white;
  border-radius: 10px;
`

const ResultWrapper = styled(RoundBorderDiv)`
  padding: 1px;
`

const Title = styled.h1`
  font-size: 24px;
  line-height: 24px;
  padding: 19px 20px 13px;
`

const DescriptionWrapper = styled(RoundBorderDiv)`
   background: #A3CDFF;
   white-space: pre-wrap;
   padding: 20px 20px 10px;
`

const TextWrapper = styled(RoundBorderDiv)`
    padding: 21px 15px 13px;
    margin: 14px 0;
`

const Feedback = styled.div`
    position: relative;
    @media all and (min-width: 1100px){
      height: fit-content;
      max-width: 602px;
      margin-left: 37px;
      grid-column: 2/3;
      grid-row: 2/3;
    }
`
const FeedbacksTitle = styled(Text)`
    border: 1px solid white;
    padding: 11px 20px 28px;
    border-radius: 10px;
    font-weight: 500;
    @media screen and (min-width: 640px){
        white-space: pre-wrap;
    }
`

const FeedbackWrapper = styled(RoundBorderDiv)`
    padding: 15px 19px 23px;
    margin-top: -17px;
    position: relative;
    z-index: 2;
`

const FeedbackImg = styled.div`
    width: 47px;
    height: 47px;
    margin-right: 12px;
`
const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
`

const FeedbackName = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    width:min-content;
`
const UserInfo = styled.div`
    display: flex;  
    align-items: flex-end;
    margin-bottom: 2.093596vh;
`

const IconButton = styled.div`
    position: absolute;
    cursor: pointer;
    bottom: 9px;
    right: 14px;
    height: 11px;
    width: 11px;
`

const NextFeedbackBtn = styled(Button)`
    position: absolute;
    width: 90px;
    height: 90px;
    bottom: -75px;
    background: #6096D5;
    border-radius: 7px;
    padding: 30px 26px 16px;
`
const ButtonWrapperMobile = styled.a`
    display: flex;
    justify-content: flex-end;
    margin-top: 14px;
    //margin-left: 100px;
    text-decoration: none;    
    width: fit-content;
    margin-left: auto;
    @media all and (min-width: 1100px){
      display: none;
    }
`

const ButtonWrapperDesktop = styled.a`
     display: none;
    @media all and (min-width: 1100px){
      display: block;
      width: fit-content;
    }
`

const InviteTitle = styled.p`
    padding-bottom: 17px;
    font-size: 14px;
    font-weight: 500;
    @media screen and (min-width: 640px) {
        font-size: 18px;
    }
`

const GOOGLE_FORM_QUESTION1_ID = 'entry.2009762436'
const GOOGLE_FORM_QUESTION2_ID = 'entry.1882342065'
const GOOGLE_FORM_QUESTION3_ID = 'entry.1766663954'
const GOOGLE_FORM_QUESTION4_ID = 'entry.533798565'
const GOOGLE_FORM_QUESTION5_ID = 'entry.1109563477';
const GOOGLE_FORM_QUESTION6_ID = 'entry.359559111';
const GOOGLE_FORM_QUESTION7_ID = 'entry.577532521';
const GOOGLE_FORM_QUESTION8_ID = 'entry.907603219';


const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfV989JLJe-j6YMKfti6pI_snO1kJfTmE9laYXHAwxXJEGUiQ/formResponse"


const Final = () => {
    const result = useResult();
    const [feedbackID, setFeedbackID] = useState(1);
    const [feedback, setFeedback] = useState(getFeedback(result.type, '1'));
    const [isFeedbackFull, setIsFeedbackFull] = useState(false);
    const { answers } = useContext(ProgressContext);



    useEffect(()=>{
        reachMetrikaGoal(result.type);
        const formAnswers = [];
        const findFormAnswer = (id) => {
            return formAnswers.find(answer => answer.id===id)?.answer || '';
        }
        Object.keys(answers).map((questionId) => {
            const answer = getAnswerById(questionId, answers[questionId])?.text || '';
            formAnswers.push({id: questionId, answer: answer });
        });

        const formData = new FormData();

        formData.append(GOOGLE_FORM_QUESTION1_ID, findFormAnswer("1"));
        formData.append(GOOGLE_FORM_QUESTION2_ID, findFormAnswer("2"));
        formData.append(GOOGLE_FORM_QUESTION3_ID, findFormAnswer("3"));
        formData.append(GOOGLE_FORM_QUESTION4_ID, findFormAnswer("4"));
        formData.append(GOOGLE_FORM_QUESTION5_ID, findFormAnswer("5"));
        formData.append(GOOGLE_FORM_QUESTION6_ID, findFormAnswer("6"));
        formData.append(GOOGLE_FORM_QUESTION7_ID, findFormAnswer("7"));
        formData.append(GOOGLE_FORM_QUESTION8_ID, findFormAnswer("8"));


        const myInit = {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        };

        const myRequest = new Request(GOOGLE_FORM_ACTION_URL, myInit);

        fetch(myRequest).then(function(response) {
            return response;
        }).then(function(response) {
        }).catch(function(e){
            console.log(e);
        });

    }, []);

    useEffect(() => {
        setFeedback(getFeedback(result.type, feedbackID.toString()))
    }, [feedbackID, result.type]);

    const isLastFeedback = +feedbackID === feedbacks[result.type].length;

    const onInviteBtnClick = () => {
        reachMetrikaGoal('apply');
    }

    return <Wrapper>
        <ImageWrapper result={result} />
        <MainInfo>
            <ResultWrapper>
                <Title>
                    {result.title}
                </Title>
                <DescriptionWrapper>
                    <Text>
                        {result.subtitle}
                    </Text>
                </DescriptionWrapper>
            </ResultWrapper>
            <TextWrapper>
                <InviteTitle>
                    Приглашаем тебя в нашу команду
                </InviteTitle>
                <Text>
                    {result.description}
                </Text>
            </TextWrapper>
            <ButtonWrapperDesktop onClick={onInviteBtnClick} href={'https://yandex.fut.ru/?utm_source=fut&utm_medium=special&utm_campaign=test&utm_content=after'}>
                <Button>  Хочу в Яндекс! </Button>
            </ButtonWrapperDesktop>
        </MainInfo>

        <Feedback>
            <FeedbacksTitle>{"У нас в компании уже есть ребята, похожие на тебя.\nЛови их истории успеха!"}</FeedbacksTitle>
            <FeedbackWrapper>
                <UserInfo>
                    <FeedbackImg>
                        <Img src={feedback.image} />
                    </FeedbackImg>
                    <FeedbackName> {feedback.name}</FeedbackName>
                </UserInfo>
                {isFeedbackFull ? feedback.text() : feedback.minText()}
                <IconButton onClick={()=>setIsFeedbackFull(prev=> !prev)}>{isFeedbackFull ? <UpChevron /> : <DownChevron />}</IconButton>
            </FeedbackWrapper>
            {isLastFeedback ?
                <NextFeedbackBtn onClick={() => setFeedbackID(prev => prev - 1)}>
                    <DoubleBack/>
                </NextFeedbackBtn>
                : <NextFeedbackBtn onClick={() => setFeedbackID(prev => prev + 1)}>
                    <DoubleForward/>
                </NextFeedbackBtn>
            }
        </Feedback>
        <ButtonWrapperMobile onClick={onInviteBtnClick} href={`https://yandex.fut.ru/?utm_source=fut&utm_medium=special&utm_campaign=test&utm_content=${result.type}`}>
            <Button>  Хочу в Яндекс! </Button>
        </ButtonWrapperMobile>
    </Wrapper>
}

export default Final;