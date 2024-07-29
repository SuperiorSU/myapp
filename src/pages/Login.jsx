import {View, Text, TextInput, StyleSheet,Button} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
const Login = () => {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={values => c.l(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        <>
          <TextInput
            name="email"
            placeholder="Email Address"
            
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
          />
          {errors.email && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
          )}
          <TextInput
            name="password"
            placeholder="Password"
            
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          {errors.password && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.password}</Text>
          )}
          <Button onPress={handleSubmit} title="LOGIN" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default Login;
