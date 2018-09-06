import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions'
import { SAVE_ANSWER } from '../actions/shared'

export default function questions(state={}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.id]: question,
            }
        case SAVE_ANSWER :
            const { authedUser, qid, answer } = action
            const question_ = {...state[qid]}
            return {
              ...state,
              [qid]: {
                ...question_,
                [answer]: {
                  ...question_[answer],
                  votes: question_[answer].votes.concat([authedUser])
                }
              }
            }
        default:
            return state
    }
}