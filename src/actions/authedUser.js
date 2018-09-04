export const SET_AUTHEDUSER = 'SET_AUTHEDUSER'
export const UNSET_AUTHEDUSER = 'UNSET_AUTHEDUSER'

export function setAuthedUser(id) {
    return {
        type: SET_AUTHEDUSER,
        id
    }
}

export function unsetAuthedUser() {
    return {
        type: UNSET_AUTHEDUSER
    }
}