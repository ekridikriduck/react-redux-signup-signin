import React, {useState, useEffect} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import { Grid, FormControlLabel, Checkbox } from "@material-ui/core";
import {Redirect} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {signUp, checkReferralToken} from "../actions/Actions";
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
const SignUpForm = props => {
    const {history} = props;
    const classes = useStyles();
    const  { token, phoneNumber, email } = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const [formState, setFormState] = useState({touched: {}, errors: {}})

    useEffect(() => {
        let errors = {
            firstName: isEmpty(formState.firstName || ''),
            lastName: isEmpty(formState.lastName || ''),
        }
        setFormState(formState => ({
            ...formState,
            errors: errors || {},
            isValid: !(errors.firstName || errors.lastName)
        }));
    }, [formState.firstName, formState.lastName]);

    const onInputChange = event => {
        event.persist();
        setFormState(formState => ({
            ...formState,
            [event.target.id]: event.target.type === 'checkbox' ?
                event.target.checked : event.target.value,
            touched: {
                ...formState.touched,
                [event.target.name]: true
            }
        }))
    }

    const onSubmit = () => {
        let {firstName, lastName, referredCodeKey, agreeToPrivacyPolicy} = formState;
        if(!referredCodeKey) referredCodeKey = '';
        dispatch(signUp(firstName, lastName, email, phoneNumber, referredCodeKey , agreeToPrivacyPolicy, token))
            .then((res)=> {
                history.push('/profile')
            }).catch((err)=> {
                console.log(err)
        })
    }
    if(!token) return <Redirect to= '/'/>
    const onReferralCodeInput = event => {
        event.persist()
        let {value = ''} = event.target;
        setFormState(formState => ({
            ...formState,
            [event.target.id]: value
        }))
        if(value.length === 6){
            dispatch(checkReferralToken(value)).then((res)=> {
                console.log(res)
            })
        }
    }
    let {firstName = '', lastName = '', referredCodeKey = '', agreeToPrivacyPolicy = false, isValid} = formState;
    const hasError = field => !!(formState.touched[field] && formState.errors[field]);
    let isDisabled = !(agreeToPrivacyPolicy && isValid);

    return (
        <form className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="firstName"
                        variant="outlined"
                        error={hasError('firstName')}
                        required
                        fullWidth
                        value = {firstName}
                        onChange={onInputChange}
                        id="firstName"
                        label="First Name"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        error={hasError('lastName')}
                        fullWidth
                        onChange={onInputChange}
                        value = {lastName}
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        onChange={onReferralCodeInput}
                        value = {referredCodeKey}
                        name="referredCodeKey"
                        label="Referral Code"
                        id="referredCodeKey"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox onChange={onInputChange} id = 'agreeToPrivacyPolicy' color="primary" />}
                        label="Agree To Privacy Policy."
                    />
                </Grid>
            </Grid>
            <Button
                onClick={onSubmit}
                fullWidth
                disabled={isDisabled}
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign Up
            </Button>
        </form>
    )
}

export default SignUpForm;