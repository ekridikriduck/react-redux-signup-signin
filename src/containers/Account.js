import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import {Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, TextField} from '@material-ui/core';
import clsx from "clsx";
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {updateProfile} from "../actions/Actions";
//import validator from "validator/es";
import isEmpty from "validator/es/lib/isEmpty";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '32px'
    }
}));

const Account = (props) => {
    const classes = useStyles();
    const { className } = props;
    const dispatch = useDispatch();
    const  user  = useSelector(state => state.user);
    const {firstName = '', lastName = '', _id = null, token = null} = user;

    const [values, setValues] = useState({
        firstName: firstName,
        lastName: lastName,
    });

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };
    const onSubmit = () => {
        let {firstName, lastName} = values;
        dispatch(updateProfile(token, _id, firstName, lastName)).then((res) => {
           let updatedUser = {...user, ...res};
            localStorage.setItem('user', JSON.stringify(updatedUser));
        })
    }
    if(!token) return <Redirect to ='/'/>
    let isDisabled = (isEmpty(values.firstName) || isEmpty(values.lastName))
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item lg={8} md={6} xl={8} xs={12}>
                    <Card className={clsx(classes.root, className)}>
                        <form autoComplete="off" noValidate>
                            <CardHeader subheader="The information can be edited" title="Profile"/>
                            <Divider />
                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="First name"
                                            margin="dense"
                                            name="firstName"
                                            onChange={handleChange}
                                            value={values.firstName}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Last name"
                                            margin="dense"
                                            name="lastName"
                                            onChange={handleChange}
                                            value={values.lastName}
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider />
                            <CardActions>
                                <Button disabled={isDisabled} onClick={onSubmit} color="primary" variant="contained">
                                    Save details
                                </Button>
                            </CardActions>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Account;
