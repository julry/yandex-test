import QuestionWrapper from "../QuestionWrapper";
import {getQuestionById} from "../../utils/getQuestionById";
import React from "react";

const Question5 = () => {
    return <QuestionWrapper question={getQuestionById("5")}/>
}

export default Question5;