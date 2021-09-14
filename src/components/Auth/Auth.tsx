import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';

const Auth = () => (
  <Switch>
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/register" component={Register} />
    <Redirect exact from="/auth" to="/auth/login" />
  </Switch>
);

export default Auth;
