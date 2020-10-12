import React from 'react';
import { Route } from 'react-router-dom';

const RouteHandler = props => {
    const { layout: Layout, component: Component, title, ...rest } = props;
    return (
        <Route {...rest}
            render = {matchProps => (
                <Layout title = {title}>
                    <Component {...matchProps}/>
                </Layout>
            )}
        />
    )
}

export default RouteHandler;