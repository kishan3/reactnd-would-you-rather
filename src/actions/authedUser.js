export const SET_AUTHEDUSER = 'SET_AUTHEDUSER'

export function setAuthedUser(id) {
    console.log("id", id)
    return {
        type: SET_AUTHEDUSER,
        id
    }
}