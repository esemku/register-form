import React, { useState } from 'react';
import { Formik } from 'formik';
import { Input, Button } from 'components/common';
import useStyles from './styles';

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const styles = useStyles();
  const [userData, serUserData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    password: '',
  });

  return (
    <Formik
      initialValues={userData}
      validate={(values) => {
        const errors: RegisterFormValues = {
          firstName: '',
          lastName: '',
          dateOfBirth: '',
          password: '',
        };

        if (!values.firstName) {
          errors.firstName = 'Required field';
        }

        if (!values.lastName) {
          errors.lastName = 'Required field';
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
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, touched, values, handleBlur, handleChange }) => (
        <form noValidate autoComplete="off" className={styles.form}>
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
          <Input
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
