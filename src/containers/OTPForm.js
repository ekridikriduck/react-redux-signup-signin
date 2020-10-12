import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import {makeStyles} from "@material-ui/core/styles";
import {useSelector, useDispatch} from "react-redux";

import {Redirect} from 'react-router-dom';
import {verifyOTP, resendOTP} from "../actions/Actions";
import isEmpty from "validator/es/lib/isEmpty";

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const OTPForm = props => {
    const {history} = props;
    const classes = useStyles();
    const [verificationCode, setVerificationCode] = useState('');
    const [disableAndRedirect, setFlag] = useState(false)
    const dispatch = useDispatch();
    const  { isLogin, token, phoneNumber, resendOtpCount } = useSelector(state => state.auth);

    if(!token) return <Redirect to= '/'/>
    let nextURL = isLogin ? '/profile' : '/verifyEmail';
    const onInputChange = e => {
        e.persist();
        setVerificationCode(() => (e.target.value))
    }
    const onSubmit = () => {
        dispatch(verifyOTP(phoneNumber,verificationCode,token)).then(() => {
            history.push(nextURL);
        }).catch((err)=> {
            let {wrongOtpCount = 0} = err;
            if(wrongOtpCount === 3) {
                setFlag(true)
            }
        })
    }

    const onResendOTP = () => {
        dispatch(resendOTP(phoneNumber, token)).then(()=> {
            if(resendOtpCount === 3) setFlag(true)
        }).catch((err)=> {
            console.log(err);
        })
    }
    let isDisabled = isEmpty(verificationCode) || verificationCode.length < 4;
    return (
        <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={onInputChange}
                value = {verificationCode}
                id="verificationCode"
                label="Enter OTP"
                name="verificationCode"
                autoFocus
            />
            <Button
                onClick={onSubmit}
                disabled={isDisabled || disableAndRedirect}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                {disableAndRedirect ? 'Please Start Again' : 'Submit'}
            </Button>
            <Link onClick={onResendOTP} style={{cursor: 'pointer'}} align="right" variant="body2">
                {"Resend OTP"}
            </Link>
        </form>
    )
}

export default OTPForm;