export function handleInitialData () {
    return (dispatch) => {
        dispatch(setAuthedUser())
    }
}