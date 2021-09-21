import { Button, CustomInputMask, Input } from 'components/common';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from 'redux/actions/authActions';
import {
  getIsRegistered,
  getIsRegisteredError,
} from 'redux/selectors/authSelectors';
import useStyles from './styles';

interface RegisterFormValues {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  password?: string;
}

const RegisterForm: React.FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const isFetched = useSelector(getIsRegistered, shallowEqual);
  const isRegisterError = useSelector(getIsRegisteredError, shallowEqual);
  const history = useHistory();

  // Action to run register saga
  const registerUser = (formData, setErrors) => {
    dispatch(register({ formData, setErrors }));
  };

  // When register is successful (isFetched === true) and register doesn't have errors
  // redirect to login page
  useEffect(() => {
    if (isFetched && !isRegisterError) {
      history.push('/login');
    }
  }, [isFetched]);

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
        registerUser(values, setErrors);
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
