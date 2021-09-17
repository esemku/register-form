import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from 'utils/auth';

const PrivateRoute = ({ component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
