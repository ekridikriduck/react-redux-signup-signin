import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Container, Avatar, Typography, Grid } from "@material-ui/core";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    }
}));

const AuthLayout = props => {
    const classes = useStyles();
    const { children, title } = props;
    const  { message = '' } = useSelector(state => state.messages);
    return (
        <Container component = 'main' maxWidth= 'xs'>
            <div className= {classes.paper}>
                <Avatar className={classes.avatar}/>
                <Typography component= 'h1' variant = 'h5'>
                    {title}
                </Typography>
                <Grid justify={"center"} container spacing={2}>
                    <Grid item>
                <Typography variant="body2" color="primary" align="center">
                    {message}
                </Typography>
                    </Grid>
                </Grid>
                {children}
            </div>
        </Container>
    )

}

export default AuthLayout;