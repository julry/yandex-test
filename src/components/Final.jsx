import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {useResult} from "../hocs/useResult";
import {Text} from "../shared/Text";
import {preloadImage} from "../utils/preloadImage";
import {getFeedback} from "../utils/getFeedback";
import {DownChevron} from "../shared/svg/DownChevron";
import {UpChevron} from "../shared/svg/UpChevron";
import {Button} from "../shared/Button";
import {DoubleForward} from "../shared/svg/DoubleForward";
import {feedbacks} from "../feedbacks.config";
import {DoubleBack} from "../shared/svg/DoubleBack";
import {ImageWrapper} from "./ResultPicture";

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
    padding: 13px 15px;
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
const FeedbackWrapper = styled(RoundBorderDiv)`
    padding: 15px 19px 23px;
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

const Final = () => {
    const result = useResult();
    const [feedbackID, setFeedbackID] = useState(1);
    const [feedback, setFeedback] = useState(getFeedback(result.type, '1'));
    const [isFeedbackFull, setIsFeedbackFull] = useState(false);

    useEffect(() => {
        setFeedback(getFeedback(result.type, feedbackID.toString()))
    }, [feedbackID]);

    const isLastFeedback = +feedbackID === feedbacks[result.type].length;

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
                <Text>
                    {result.description}
                    <br />
                    <br />
                    У нас в компании уже есть ребята, похожие на тебя. Лови их истории успеха! Интересно?
                </Text>
            </TextWrapper>
            <ButtonWrapperDesktop href={'https://yandex.fut.ru/?utm_source=fut&utm_medium=special&utm_campaign=test&utm_content=after'}>
                <Button>  Хочу в Яндекс! </Button>
            </ButtonWrapperDesktop>
        </MainInfo>

        <Feedback>
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
        <ButtonWrapperMobile href={'https://yandex.fut.ru/?utm_source=fut&utm_medium=special&utm_campaign=test&utm_content=after'}>
            <Button>  Хочу в Яндекс! </Button>
        </ButtonWrapperMobile>
    </Wrapper>
}

export default Final;