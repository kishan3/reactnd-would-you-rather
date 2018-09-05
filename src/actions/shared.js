import { getInitialData } from "../utils/api"
import { _saveQuestionAnswer } from "../utils/_DATA"
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
        .then(({ users, questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}

export function handleSaveAnswer (question_id, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        debugger;
        return _saveQuestionAnswer({
            authedUser,
            question_id,
            answer
        })
    }
}