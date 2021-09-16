import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';

const Auth = () => (
  <Switch>
    <Route path="/auth/login" component={LoginForm} />
    <Route path="/auth/register" component={RegisterForm} />
    <Redirect exact from="/auth" to="/auth/login" />
  </Switch>
);

export default Auth;
