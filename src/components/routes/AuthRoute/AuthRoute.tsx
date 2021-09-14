import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from 'utils/auth';

const AuthRoute = ({ layout, component, ...rest }: any) => {
  console.log('AuthRoute: ', isAuth());

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth() ? (
          React.createElement(
            layout,
            props,
            React.createElement(component, props),
          )
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
