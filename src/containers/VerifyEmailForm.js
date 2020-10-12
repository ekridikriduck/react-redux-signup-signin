import React , {useState} from 'react';
import { TextField, Button, Grid } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";
import { requestEmailVerification, verifyEmail, resendEmailToken } from "../actions/Actions";
import {Redirect} from "react-router-dom";
import Link from "@material-ui/core/Link";
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

const VerifyEmailForm = props => {
    const {history} = props;
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [verificationToken, setVerificationToken] = useState('')
    const [disableAndRedirect, setFlag] = useState(false)
    const [isCodeSent, setCodeSent] = useState(false);
    const  { token, phoneNumber, resendEmailTokenCount } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const sendVerificationCode = (e) => {
        dispatch(requestEmailVerification(email, token, phoneNumber))
            .then(() => {
                setCodeSent(true);
            }).catch((err)=> {
                console.log(err);
        })
    }

    const validateVerificationCode = (e) => {
        dispatch(verifyEmail(email, token.toString(), verificationToken))
            .then(() =>{
                history.push('/signUp');
            })
    }

    const onInputChange = event => {
        event.persist();
        setEmail(() => (event.target.value))
    }
    const onVerificationCodeChange = event => {
        event.persist();
        setVerificationToken(() => (event.target.value))
    }

    const onResendEmailToken = () => {
        dispatch(resendEmailToken(email, token.toString())).then(() => {
            if(resendEmailTokenCount === 3) setFlag(true)
        })
    }
    if(!token) return <Redirect to= '/'/>
    let isDisabled = isEmpty(email) || disableAndRedirect
    return (
        <form className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs = {12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        disabled={isCodeSent}
                        fullWidth
                        onChange = {onInputChange}
                        value={email}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                    />
                </Grid>
                <Grid hidden = {!isCodeSent} item xs = {12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        onChange = {onVerificationCodeChange}
                        value={verificationToken}
                        id= "verificationToken"
                        label= "Enter Verification Code"
                        name= "verificationToken"
                    />
                </Grid>
            </Grid>
            <Button
                onClick={!isCodeSent ? sendVerificationCode : validateVerificationCode}
                fullWidth
                disabled={isDisabled}
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                {isCodeSent ? 'Verify Email' : 'Send Verification Code'}
            </Button>
            <Link hidden={!isCodeSent} onClick={onResendEmailToken} style={{cursor: 'pointer'}} align="right" variant="body2">
                {"Resend Email Token"}
            </Link>
        </form>
    )
}

export default VerifyEmailForm;