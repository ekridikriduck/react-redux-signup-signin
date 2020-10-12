import React from 'react';
import { BrowserRouter as Router} from'react-router-dom';
import Routes from "./Routes";
import {ThemeProvider} from "@material-ui/styles";
import theme from "./theme";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
        <Router basename= '/react-redux-signup-signin'>
            <Routes/>
        </Router>
        </ThemeProvider>
    );
}