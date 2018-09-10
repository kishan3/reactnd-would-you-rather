import { SET_AUTHEDUSER, UNSET_AUTHEDUSER } from '../actions/types'

export default function authedUser (state=null, action) {
    switch(action.type) {
        case SET_AUTHEDUSER:
            return action.id
        case UNSET_AUTHEDUSER:
            return null
        default:
            return state
    }
}