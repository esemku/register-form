import React, { useEffect } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Input, Button } from 'components/common';
import { authenticate, removeLocalStorage, isAuth } from 'utils/auth';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useStyles from './styles';

interface LoginFormValues {
  firstName?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();

  const fetchLoginUser = (values, setErrors) => {
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
        if (error.response) {
          setErrors({
            [error.response.data.field]: error.response.data.errors,
          });
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem('userRegistered')) {
      toast.success('Now You can Sign In !', {
        position: toast.POSITION.TOP_CENTER,
      });
      removeLocalStorage('userRegistered');
    }
  }, []);

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
      onSubmit={(values, { setErrors }) => {
        fetchLoginUser(values, setErrors);
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
          <ToastContainer />
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
