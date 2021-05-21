import React from 'react';
import {View, Text} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';

import defaultStyle from '../../config/defaultStyle';
import LogoComponent from '../../component/LogoComponent';
import TextInputComponent from '../../component/TextInputComponent';
import KeyboardAvoidViewContainer from '../../common/KeyboardAvoidViewContainer';
import AppButton from '../../component/AppButton';

const validateRegistration = Yup.object().shape({
  email: Yup.string()
    .email('Please provide a valid email')
    .required('Email is required')
    .label('Please provide a valid email'),
  password: Yup.string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .required('No password provided.'),
  confirmPassword: Yup.string()
    .required('Required')
    .test(
      'confirm-password-test',
      'Password and confirm password should match',
      function (value) {
        return value === this.parent.password;
      },
    ),
});

function RegisterScreen() {
  function handleLogin() {
    console.log('Hello');
  }

  return (
    <KeyboardAvoidViewContainer>
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
        validationSchema={validateRegistration}
        onSubmit={handleLogin}>
        {({
          handleChange,
          handleSubmit,
          values,
          setFieldTouched,
          touched,
          errors,
        }) => (
          <View style={defaultStyle.container}>
            <LogoComponent />
            <TextInputComponent
              autoCapitalize="none"
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              value={values.email}
            />
            <View>
              {touched.email && (
                <Text style={{color: 'red'}}>{errors.email} </Text>
              )}
            </View>
            <TextInputComponent
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('email')}
              value={values.password}
            />
            <View>
              {touched.password && (
                <Text style={{color: 'red'}}>{errors.password} </Text>
              )}
            </View>
            <TextInputComponent
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Confirm Password"
              onBlur={() => setFieldTouched('confirmPassword')}
              onChangeText={handleChange('confirmPassword')}
            />
            <View>
              {touched.confirmPassword && (
                <Text style={{color: 'red'}}>{errors.confirmPassword} </Text>
              )}
            </View>
            <AppButton
              title="Sign up"
              bgButtonColor="primaryButtonColor"
              textColor="primary"
              onPressed={handleSubmit}
              disabled={
                !(
                  values.email.length !== 0 &&
                  values.password.length !== 0 &&
                  values.password === values.confirmPassword
                )
              }
            />
          </View>
        )}
      </Formik>
    </KeyboardAvoidViewContainer>
  );
}

export default RegisterScreen;
