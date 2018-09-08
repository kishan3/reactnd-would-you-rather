import { getInitialData } from "../utils/api"
import { _saveQuestionAnswer } from "../utils/_DATA"
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { SAVE_ANSWER } from './types'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
        .then(({ users, questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}

function addAnswer(authedUser, qid, answer){
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function handleSaveAnswer (qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return _saveQuestionAnswer({
            authedUser,
            qid,
            answer,
        })
        .then(dispatch(addAnswer(authedUser, qid, answer)))
    }
}