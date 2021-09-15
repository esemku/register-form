import React, { useState } from 'react';
import { Formik } from 'formik';
import { Input } from 'components/common/Input';
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
    <div>
      <h1 className={styles.title}>Sign In</h1>
      <p className={styles.subtitle}>New Here?</p>
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
          <form noValidate autoComplete="off" className="form">
            <Input
              name="firstName"
              value={values.firstName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.firstName}
              touched={touched.firstName}
            />

            <div>LOGIN</div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
