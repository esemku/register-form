import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useStyles from './styles';

const AuthLayout: React.FC<React.PropsWithChildren<unknown>> = (
  props: React.PropsWithChildren<unknown>,
) => {
  const styles = useStyles();
  const { children } = props;
  const location = useLocation();
  const isRegisterPage = location.pathname.includes('register');

  return (
    <div className={styles.root}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>
          {isRegisterPage && 'Create an Account'}
          {!isRegisterPage && 'Sign In'}
        </h1>
        <p className={styles.subtitle}>
          {isRegisterPage && 'Already have an account?'}
          {!isRegisterPage && 'New Here?'}
          &nbsp;
          <NavLink
            to={isRegisterPage ? '/auth/login' : '/auth/register'}
            className={styles.subtitleLink}
          >
            {isRegisterPage && 'Sign in here'}
            {!isRegisterPage && 'Create an Account'}
          </NavLink>
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
