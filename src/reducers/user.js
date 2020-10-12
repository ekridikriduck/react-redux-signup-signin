
const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? user : {};


export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'VERIFIED_LOGIN':
            return {
                ...state,
                ...payload
            }
        case 'UPDATE_USER':
            return {
                ...state,
                ...payload
            }
        case 'LOGOUT_USER':
            return {}
        default:
            return state;
    }
}