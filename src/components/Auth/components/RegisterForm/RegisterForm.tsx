import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Input, Button, CustomInputMask } from 'components/common';
import { useHistory } from 'react-router-dom';

import { setLocalStorage } from 'utils/auth';
import useStyles from './styles';

interface RegisterFormValues {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  password?: string;
}

const RegisterForm: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();

  // Try to connect with API to register user
  const fetchRegisterUser = (values, setErrors) => {
    axios
      .post(`${process.env.REACT_APP_API}register`, {
        ...values,
      })
      .then(() => {
        setLocalStorage('userRegistered', true);
        history.push('/login');
      })
      .catch((error) => {
        if (error.response) {
          setErrors({
            [error.response.data.field]: error.response.data.errors,
          });
        }
      });
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        password: '',
      }}
      validate={(values) => {
        const errors: RegisterFormValues = {};

        if (!values.firstName) {
          errors.firstName = 'Required field';
        }

        if (!values.lastName) {
          errors.lastName = 'Required field';
        }

        if (!values.dateOfBirth) {
          errors.dateOfBirth = 'Required field';
        }

        if (!values.password) {
          errors.password = 'Required field';
        }

        return errors;
      }}
      onSubmit={(values, { setErrors }) => {
        fetchRegisterUser(values, setErrors);
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
          <div className={styles.pairInputsWrapper}>
            <div className={styles.inputWrapper}>
              <Input
                name="firstName"
                label="First name"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.firstName}
                touched={touched.firstName}
              />
            </div>
            <div className={styles.inputWrapper}>
              <Input
                name="lastName"
                label="Last name"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.lastName}
                touched={touched.lastName}
              />
            </div>
          </div>
          <CustomInputMask
            name="dateOfBirth"
            label="Date Of Birth"
            value={values.dateOfBirth}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.dateOfBirth}
            touched={touched.dateOfBirth}
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
          <div className={styles.buttonWrapper}>
            <Button name="Submit" type="submit" />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
