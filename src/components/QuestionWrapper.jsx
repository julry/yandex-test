import React, {useCallback, useContext, useState} from 'react';
import styled from 'styled-components';
import { ProgressContext } from '../contexts/ProgressContext';
import {BoldMainText, MainText, Text} from "../shared/Text";
import {questions} from "../questions.config";
import {Button} from "../shared/Button";
import {reachMetrikaGoal} from "../utils/reachMetrikaGoal";

const Wrapper  = styled.div`
    padding: 2.5862vh 5.0666vw 0;
    position: relative;
    width: 100vw;
`
const NumberWrapper  = styled.div`
    width: 6.8965vh;
    height: 6.8965vh;
    max-height: 56px;
    max-width: 56px;
    min-height: 30px;
    min-width: 30px;
    font-size: 20px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin-bottom: 2.7093vh;
`

const Question = styled(MainText)`
    font-weight: 300;
    @media all and (min-width: 640px){
          max-width: 604px;
    }
    @media all and (min-width: 1100px){
          max-width: 886px;
    }
`
const AnswersWrapper = styled.div`
     padding: 0.246305vh 0 1.600985vh;
     @media all and (min-width: 640px){
          max-width: 650px;
    }
      @media all and (min-width: 1100px){
          max-width: 801px;
    }
`

const AnswerBox = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 11px 17px;
  border-radius: 5px;
  border: 1px solid white;
  background: #A3CDFF;
  margin-top: 1.35468vh;
  
`

const ModalWrapper = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  left:0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
`
const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Modal = styled.div`
  white-space: pre-wrap;
  background: white;
  border-radius: 8px;
  padding: 22px 25px;
  width: 300px;
  margin-bottom: 3.463054vh;
  @media all and (min-width: 640px){
          width: 450px;
  }
`
const QuestionWrapper = (props) => {
    const {question} = props;

    const questionNumber = questions.findIndex(item => item.id === question.id) + 1;
    const { answers, setAnswer, setNext } = useContext(ProgressContext);
    const [isDescriptionModal, setIsDescriptionModal] = useState(false);


    const handleAnswerChange = useCallback((answerId) => {
        setAnswer(question.id, answerId);
    }, [question, setAnswer]);

    const onSetNextQuestion = () => {
        if (questionNumber === questions.length) reachMetrikaGoal('finish');
        setNext();
    }

    return <Wrapper style={isDescriptionModal? {overflow: 'hidden', height: window.innerHeight} : {}}>
            <NumberWrapper> {questionNumber}</NumberWrapper>
            <Question>{question.text}</Question>
            <BoldMainText> {question.question}</BoldMainText>
            <AnswersWrapper>
                {question.answers.map(answer=>
                    <AnswerBox
                        key={answer.text+question.id}
                        style={answers[question.id] === answer.id ? {background: 'white'} : {}}
                        onClick={()=>handleAnswerChange(answer.id)}
                    >
                        <Text> {answer.text} </Text>
                    </AnswerBox>
                )}
            </AnswersWrapper>

        {answers[question.id] ? <Button style={question.id==='5'?{marginBottom: '5px'}: {}}
                                        onClick={() => setIsDescriptionModal(true)}
            >
                Далее
        </Button>
         : <div style={{height: "55px"}} />
        }

            {props.children}

            {isDescriptionModal&&<ModalWrapper>
                <ModalContent>
                    <Modal>
                        <BoldMainText>{question.afterTitle}</BoldMainText>
                        <MainText>{question.afterText}</MainText>
                    </Modal>
                    <Button onClick={onSetNextQuestion}>Далее</Button>
                </ModalContent>
            </ModalWrapper>}
        </Wrapper>
}

export default QuestionWrapper;