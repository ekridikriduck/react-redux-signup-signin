const initialState = {};


export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'NUMBER_VERIFIED':
            return {
                ...state,
                ...payload
            }
        case 'OTP_RESEND':
            return {
                ...state,
                ...payload
            }
        case 'WRONG_OTP':
            return {
                ...state,
                ...payload
            }
        case 'TOKEN_RESEND':
            return {
                ...state,
                ...payload
            }
        case 'EMAIL_VERIFIED':
            return {
                ...state,
                ...payload
            }
        case 'CLEAR_AUTH':
            return {}
        default:
            return state;
    }
}