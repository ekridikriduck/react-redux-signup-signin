import Services from "../services/Services";

export const verifyPhoneNumber = (phoneNumber) => (dispatch) => {
    return Services.verifyPhoneNumber(phoneNumber).then(({results, message})=> {
        if(!results) {return Promise.reject(message);}
        let {wrongOtpCount, resendOtpCount, token, isLogin} = results;
        dispatch({
            type: 'NUMBER_VERIFIED',
            payload: {wrongOtpCount, resendOtpCount, token, isLogin, phoneNumber}
        })
        dispatch({
            type: 'SET_MESSAGE',
            payload: message
        })
        return Promise.resolve();
    }).catch((err) => {
        console.log(err);
        return Promise.reject(err);
    })
}

export const verifyOTP = (phoneNumber, verificationCode, token) => (dispatch) => {
    return Services.verifyOTP(phoneNumber, verificationCode, token).then(({results, message, messageObj}) => {
        if(!results) {
            dispatch({
                type: 'SET_MESSAGE',
                payload: message
            })
            return Promise.reject(messageObj)
        }
        let { isLogin, user } = results;
        if(isLogin){
            dispatch({
                type: 'VERIFIED_LOGIN',
                payload: user
            })
            localStorage.setItem('user', JSON.stringify(user));
            return Promise.resolve()
        }
        dispatch({
            type: 'SET_MESSAGE',
            payload: message
        })
        return Promise.resolve()
    }).catch((err)=> {
        dispatch({
            type: 'WRONG_OTP',
            payload: err
        })
        let {wrongOtpCount = 0} = err;
        if(wrongOtpCount === 3){
            setTimeout(() => {
                dispatch({
                    type: 'CLEAR_MESSAGE'
                })
                dispatch({
                    type: 'CLEAR_AUTH'
                })
            }, 2000)
        }
        return Promise.reject(err)
    })
}

export const requestEmailVerification = (email, token, phoneNumber) => dispatch => {
    return Services.requestEmailVerification(email, token, phoneNumber).then((payload) =>{
        let {results, message} = payload;
        if(!results) {return Promise.reject(message);}
        dispatch({
            type: 'VERIFICATION_MAIL_SEND',
            payload
        })
        dispatch({
            type: 'SET_MESSAGE',
            payload: message
        })
        return Promise.resolve();
    }).catch((err)=> {
        console.log(err);
        dispatch({
            type: 'SET_MESSAGE',
            payload: err
        })
        return Promise.reject(err)
    })
}

export const verifyEmail = (email, token, verificationToken) => dispatch => {
    return Services.verifyEmail(email, token, verificationToken).then((payload) => {
        let {results, message} = payload;
        if(!results) {return Promise.reject(message);}
        dispatch({
            type: 'EMAIL_VERIFIED',
            payload: {...results, email}
        })
        dispatch({
            type: 'CLEAR_MESSAGE'
        })
        return Promise.resolve()
    }).catch((err) => {
        console.log(err);
        dispatch({
            type: 'SET_MESSAGE',
            payload: err
        })
        return Promise.reject(err);
    })
}

export const signUp = (firstName, lastName, email, phoneNumber, referredCodeKey, agreeToPrivacyPolicy, token) => dispatch => {
    return Services.signUp(firstName, lastName, email, phoneNumber, referredCodeKey, agreeToPrivacyPolicy, token)
        .then((payload) => {
            let {results, message} = payload;
            if(!results) {return Promise.reject(message);}
            let {user} = results;
            dispatch({
                type: 'VERIFIED_LOGIN',
                payload: user
            })
            return Promise.resolve()
        }).catch((error)=> {
            console.log(error)
            dispatch({
                type: 'SET_MESSAGE',
                payload: error
            })
            return Promise.reject(error)
        })
}

export const checkReferralToken = (token) => dispatch => {
    return Services.checkReferralToken(token).then(({message})=> {
        dispatch({
            type: 'SET_MESSAGE',
            payload: message
        })
        return Promise.resolve()
    })
}

export const updateProfile = (token, userID, firstName, lastName) => dispatch => {
    return Services.updateProfile(token, userID, firstName, lastName).then(({results, message})=> {
        let {user} = results;
        dispatch({
            type: 'UPDATE_USER',
            payload: user
        })
        return Promise.resolve(user);
    })
}

export const logoutUser = (userID, token) => dispatch => {
    return Services.logoutUser(userID, token).then(({message})=> {
        dispatch({
            type: 'LOGOUT_USER'
        })
        localStorage.clear()
        return Promise.resolve();
    })
}

export const resendOTP = (phoneNumber, token) => dispatch => {
    return Services.resendOTP(phoneNumber, token).then(({results, message}) => {
        if(!results) return Promise.reject(message);
        dispatch({
            type: 'OTP_RESEND',
            payload: results
        })
        dispatch({
            type: 'SET_MESSAGE',
            payload: message
        })
        return  Promise.resolve();
    }).catch((error)=> {
        setTimeout(() => {
            dispatch({
                type: 'CLEAR_MESSAGE'
            })
            dispatch({
                type: 'CLEAR_AUTH'
            })
        }, 2000)
    })
}

export const resendEmailToken = (email, token) => dispatch => {
    return Services.resendEmailToken(email, token).then(({results, message}) => {
        if(!results) return Promise.reject(message);
        dispatch({
            type: 'TOKEN_RESEND',
            payload: results
        })
        dispatch({
            type: 'SET_MESSAGE',
            payload: message
        })
        return  Promise.resolve();
    }).catch((error)=> {
        setTimeout(() => {
            dispatch({
                type: 'CLEAR_MESSAGE'
            })
            dispatch({
                type: 'CLEAR_AUTH'
            })
        }, 2000)
    })
}