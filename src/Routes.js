import React from "react";
import {Switch} from "react-router-dom";
import RouteHandler from "./components/RouteHandler";
import AuthLayout from "./layouts/AuthLayout";
import SignInForm from "./containers/SignInForm";
import OTPForm from "./containers/OTPForm";
import SignUpForm from "./containers/SignUpForm";
import VerifyEmailForm from "./containers/VerifyEmailForm";
import Account from "./containers/Account";
import MainLayout from "./layouts/MainLayout";
const Routes = () => {
    return (
        <Switch>
            <RouteHandler
                layout = {AuthLayout}
                exact
                title = 'Sign In'
                component ={SignInForm}
                path = '/'
            />
            <RouteHandler
                layout = {AuthLayout}
                exact
                title = 'Enter OTP'
                component ={OTPForm}
                path = '/enterOtp'
            />
            <RouteHandler
                layout = {AuthLayout}
                exact
                title = 'Verify Email Address'
                component ={VerifyEmailForm}
                path = '/verifyEmail'
            />
            <RouteHandler
                layout = {AuthLayout}
                exact
                title = 'Sign Up'
                component ={SignUpForm}
                path = '/signUp'
            />
            <RouteHandler
                layout = {MainLayout}
                exact
                title = ''
                component = {Account}
                path = '/profile'
            />
        </Switch>
    )
}
export default Routes