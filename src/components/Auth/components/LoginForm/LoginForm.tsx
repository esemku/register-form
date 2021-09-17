import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Input, Button } from 'components/common';
import { authenticate, isAuth } from 'utils/auth';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

interface LoginFormValues {
  firstName?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();
  const [serverErrors, setServerErrors] = useState({});

  const fetchLoginUser = (values) => {
    axios
      .post(`${process.env.REACT_APP_API}login`, {
        ...values,
      })
      .then((response) => {
        const { token, user } = response.data;
        authenticate(token, user);
        if (isAuth()) {
          history.push('/private');
        }
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        password: '',
      }}
      validate={(values) => {
        const errors: LoginFormValues = {};

        if (!values.firstName) {
          errors.firstName = 'Required field';
        }

        if (!values.password) {
          errors.password = 'Required field';
        }

        return errors;
      }}
      enableReinitialize
      onSubmit={(values) => {
        fetchLoginUser(values);
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({
        errors,
        touched,
        values,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={handleSubmit}
        >
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
            type="password"
          />
          <Button name="Continue" type="submit" />
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
