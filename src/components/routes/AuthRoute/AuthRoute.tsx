import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { getIsAuthenticated } from 'redux/selectors/authSelectors';

const AuthRoute = ({ layout, component, ...rest }: any) => {
  const { isAuthenticated } = useSelector(getIsAuthenticated, shallowEqual);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
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
