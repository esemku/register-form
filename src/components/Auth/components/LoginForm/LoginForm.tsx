import { Button, Input } from 'components/common';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { clearRegister, login } from 'redux/actions/authActions';
import { getIsRegistered } from 'redux/selectors/authSelectors';
import useStyles from './styles';

interface LoginFormValues {
  firstName?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const isFetched = useSelector(getIsRegistered, shallowEqual);

  // Action to run login saga
  const loginUser = (formData, setErrors) => {
    dispatch(login({ formData, setErrors }));
  };

  // When register is successful (isFetched === true) show notification about sign in
  // and clear redux (set default) for register
  useEffect(() => {
    if (isFetched) {
      toast.success('Now You can Sign In!', {
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(clearRegister());
    }
  }, [isFetched]);

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
        loginUser(values, setErrors);
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
