import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from '../actions/types'
import { SAVE_ANSWER } from '../actions/types'

export default function users(state={}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER:
            const { question } = action
            const author = question.author
            const id = question.id
            return {
                ...state,
                [author] : {
                    ...state[author],
                    questions: state[author].questions.concat([id])
                }
            }
        case SAVE_ANSWER:
            const user = state[action.authedUser];
            return {
                ...state,
                [action.authedUser]: {
                ...user,
                answers: {
                    ...user.answers,
                    [action.qid]: action.answer
                }
                }
            }
        default:
            return state
    }
}