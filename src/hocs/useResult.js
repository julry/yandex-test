import {useContext, useState} from 'react';
import { ProgressContext } from '../contexts/ProgressContext';
import { getAnswerById } from '../utils/getAnswerById';
import { AnswerType, answerTypes } from '../answerTypes.config';

const DEFAULT_RESULT = AnswerType.Intellectual;

export const useResult = () => {
    const { answers } = useContext(ProgressContext);

    const resultPoints = Object.keys(answers).reduce((res, questionId) => {
        const answerId = answers[questionId];
        if (!answerId) return res;
        const answer = getAnswerById(questionId, answerId);
        const { type } = answer;
        return { ...res, [type]: (res[type] || 0) + 1 };
    }, {});

    const maxPoints = Math.max(...Object.keys(resultPoints).map(key => resultPoints[key]));
    const resultType = Object.keys(resultPoints).find(key => resultPoints[key] === maxPoints);

    return answerTypes[resultType || DEFAULT_RESULT];
};