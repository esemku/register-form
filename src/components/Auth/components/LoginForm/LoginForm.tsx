import React, { useState } from 'react';
import { Formik } from 'formik';
import { Input, Button } from 'components/common';
import useStyles from './styles';

interface LoginFormValues {
  firstName: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const styles = useStyles();
  const [userData, serUserData] = useState({
    firstName: '',
    password: '',
  });

  return (
    <Formik
      initialValues={userData}
      validate={(values) => {
        const errors: LoginFormValues = {
          firstName: '',
          password: '',
        };

        if (!values.firstName) {
          errors.firstName = 'Required field';
        }

        if (!values.password) {
          errors.password = 'Required field';
        }

        return errors;
      }}
      enableReinitialize
      onSubmit={(values, actions) => {
        console.log('values: ', { values, actions });
      }}
    >
      {({ errors, touched, values, handleBlur, handleChange }) => (
        <form noValidate autoComplete="off" className={styles.form}>
          <Input
            name="firstName"
            label="First name"
            value={values.firstName}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.firstName}
            touched={touched.firstName}
          />
          <Input
            name="password"
            label="Password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.password}
            touched={touched.password}
          />
          <Button name="Continue" type="submit" />
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
