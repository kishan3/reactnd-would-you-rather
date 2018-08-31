import { _saveQuestion } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

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

export function handleAddQuestion (option_one, option_two) {
    console.log(`TEXT ${option_one} TEXT ${option_two}`)
    return (dispatch, getState) => {
        const { authedUser } = getState()

        return _saveQuestion({
            option_one,
            option_two,
            author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
    }
}