import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content'
    },
    avatar: {
        width: 60,
        height: 60
    },
    name: {
        marginTop: theme.spacing(1)
    }
}));

const Profile = props => {
    const { className, ...rest } = props;

    const classes = useStyles();

    const user = useSelector(state => state.user);
    let {avatar, firstName, lastName, phoneNumber} = user;
    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Avatar
                alt="Person"
                className={classes.avatar}
                src={avatar}
            />
            <Typography
                className={classes.name}
                variant="h4"
            >
                {`${firstName} ${lastName}`}
            </Typography>
            <Typography variant="body2">{phoneNumber}</Typography>
        </div>
    );
};


export default Profile;
