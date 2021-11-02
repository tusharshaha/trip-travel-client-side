import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user} = useAuth()
    if (!user.email) {
        return <div className='text-center mt-3'>
            <Spinner animation="grow" variant="warning" />
        </div>
    }else{
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />)}>
        </Route>
    );
    }
};

export default PrivateRoute;