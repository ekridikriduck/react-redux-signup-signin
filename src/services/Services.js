import axios from 'axios';

const BASE_URL = 'https://hiring.getbasis.co/candidate/';


const verifyPhoneNumber = (phoneNumber) =>{
    return axios.post(BASE_URL+ 'users/phone', {
        phoneNumber
    }).then((response)=> {
        let { data } = response;
        let {success, results, message} = data;
        if(success){
            return {message, results}
        } else return {message}
    }).catch((error) => {
        console.log(error);
    })
}

const verifyOTP = (phoneNumber, verificationCode, token) => {
    return axios.post(BASE_URL+ 'users/phone/verify', {
        phoneNumber, verificationCode, token
    }).then((response) => {
        let { data } = response;
        let {success , results, message, messageObj} = data
        if(success) return {results, message};
        else return {message, messageObj}
    }).catch((error)=> {
        console.log(error);
    })
}

const requestEmailVerification = (email, token, phoneNumber) => {
    return axios.post(BASE_URL+ 'users/email',{
        email, token, phoneNumber
    }).then((response)=> {
        let { data } = response;
        let {success , results, message} = data
        if(success) return {results, message};
        else return {message}
    }).catch((error)=> {
        console.log(error);
    })
}

const verifyEmail = (email, token, verificationToken) => {
    return axios.post(BASE_URL+ 'users/email/verify', {
        email, token, verificationToken
    }).then((response) => {
        let { data } = response;
        let {success , results, message} = data
        if(success) return {results, message};
        else return {message}
    }).catch((error) => {
        console.log(error);
    })
}

const signUp = (firstName, lastName, email, phoneNumber, referredCodeKey = '', agreeToPrivacyPolicy, token) => {
    return axios.post(BASE_URL+ 'users', {
        firstName, lastName, email, phoneNumber, referredCodeKey, agreeToPrivacyPolicy, token, source: 'WEB_APP'
    }).then((response) => {
        let { data } = response;
        let {success , results, message} = data
        if(success) return {results, message};
        else return {message}
    }).catch((error) => {
        console.log(error)
    })
}

const checkReferralToken = (token) => {
    return axios.put(BASE_URL+ `users/referral/${token}`).then((response)=> {
        let { data } = response;
        let {message} = data
        return {message};
    }).catch((error)=> {
        console.log(error)
    })
}


const resendOTP = (phoneNumber, token) => {
    return axios.put(BASE_URL+'users/otp/resend', {phoneNumber, token}).then(({data}) => {
        let {success, message, results} = data;
        if(success) return {message, results};
        else return {message}
    }).catch((error) => {
        console.log(error);
    })
}

const updateProfile = (token, userID, firstName, lastName) => {
    let authHeader = `Bearer ${userID},${token}`;
    return axios.put(BASE_URL+ `users/${userID}`,{firstName, lastName, avatar: null}, {headers: {Authorization: authHeader}})
        .then((response)=> {
        let {data} = response;
        console.log(response);
        let {message, results, success} = data;
        if(success) return {results, message};
        else return {message}
    }).catch((error) => {
        console.log(error);
    })
}


const logoutUser = (userID, token) => {
    let authHeader = `Bearer ${userID},${token}`;
    return axios.delete(BASE_URL+ `users/logout/${userID}`,{headers: {Authorization: authHeader}})
        .then((response)=> {
            let {data} = response;
            let {message, results, success} = data;
            if(success) return {results, message};
            else return {message}
        }).catch((error)=> {
            console.log(error)
        })
}

const resendEmailToken = (email, token) => {
    return axios.put(BASE_URL+'users/token/resendtoken', {email, token}).then(({data}) => {
        let {success, message, results} = data;
        if(success) return {message, results};
        else return {message}
    }).catch((error) => {
        console.log(error);
    })
}


export default {
    verifyPhoneNumber,
    verifyOTP,
    requestEmailVerification,
    verifyEmail,
    signUp,
    checkReferralToken,
    updateProfile,
    logoutUser,
    resendOTP,
    resendEmailToken
}