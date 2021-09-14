import React from 'react';

const AuthLayout: React.FC<React.PropsWithChildren<unknown>> = (
  props: React.PropsWithChildren<unknown>,
) => {
  const { children } = props;

  return <div style={{ border: '1px solid red' }}>{children}</div>;
};

export default AuthLayout;
