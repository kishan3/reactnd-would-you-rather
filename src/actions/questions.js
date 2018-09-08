import { _saveQuestion } from "../utils/_DATA"
import { addQuestionToUser } from './users'
import { RECEIVE_QUESTIONS, ADD_QUESTION } from './types'


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question,
    }
}



export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
        .then((question) => dispatch(addQuestionToUser(question.question)))
    }
}