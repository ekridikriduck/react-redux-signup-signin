import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, IconButton, Hidden } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from "clsx";

import {logoutUser} from "../actions/Actions";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none'
    },
    flexGrow: {
        flexGrow: 1
    },
    signOutButton: {
        marginLeft: '8px'
    }
}));

const Topbar = props => {
    const { className, onSidebarOpen, ...rest } = props;
    const classes = useStyles();
    const dispatch = useDispatch()
    const  user  = useSelector(state => state.user);
    let { _id, token} = user;
    const onLogout = () => {
        dispatch(logoutUser(_id,  token)).then((response)=> {
        })
    }
    return (
        <AppBar  {...rest} className={clsx(classes.root, className)}>
            <Toolbar>
                <div className={classes.flexGrow} />
                    <IconButton onClick={onLogout} className={classes.signOutButton} color="inherit">
                        <InputIcon />
                    </IconButton>
                <Hidden lgUp>
                    <IconButton
                        color="inherit"
                        onClick={onSidebarOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
