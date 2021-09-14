import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from 'components/routes/PrivateRoute';
import { AuthRoute } from 'components/routes/AuthRoute';
import { AuthLayout } from 'components/Auth/AuthLayout';
import { Home } from './Home';
import { Auth } from './Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute layout={AuthLayout} path="/auth" component={Auth} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
