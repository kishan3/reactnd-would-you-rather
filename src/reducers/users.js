import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from '../actions/users'

export default function users(state={}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER:
            const { question } = action
            console.log(question)
            const author = question.author
            const id = question.id
            console.log("state: ", state[author])
            return {
                ...state,
                [author] : {
                    ...state[author],
                    questions: state[author].questions.concat([id])
                }
            }
        default:
            return state
    }
}