import React , {useState, useEffect} from 'react';
import { TextField, Button } from "@material-ui/core";
import validator from "validator/es";
import {makeStyles} from "@material-ui/core/styles";

import { useDispatch } from "react-redux";
import { verifyPhoneNumber } from "../actions/Actions";


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignInForm = props => {
    const {history} = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({
        isValid: false,
        error: false,
        phoneNumber: '',
        touched: false
    });

    useEffect(() => {
        let isValidNumber = validator.isMobilePhone(formState.phoneNumber, 'en-IN');
        setFormState(formState => ({
            ...formState,
            isValid: isValidNumber,
            error: isValidNumber ? false : 'Please Enter A Valid Phone Number'
        }));
    }, [formState.phoneNumber]);


    const onClick = (e) => {
        let {phoneNumber} = formState;
        dispatch(verifyPhoneNumber(phoneNumber))
            .then(() => {
                history.push('/enterOtp')
            }).catch((err) => {console.log(err)})
    }

    const onInputChange = event => {
        event.persist();
        setFormState(formState => ({
            ...formState,
            [event.target.id]: event.target.value,
            touched: true
        }))
    }

    let { phoneNumber, isValid } = formState;
    const hasError = () => !!(formState.touched && formState.error);
    return (
        <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                error={hasError()}
                fullWidth
                helperText={hasError() ? formState.error : ''}
                onChange = {onInputChange}
                value={phoneNumber}
                id="phoneNumber"
                label="Mobile Number"
                name="phoneNumber"
                autoFocus
            />
            <Button
                onClick={onClick}
                disabled={!isValid}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Get OTP
            </Button>
        </form>
    )
}

export default SignInForm;