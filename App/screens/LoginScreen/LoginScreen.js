import React, {useState, createContext, useContext} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from 'yup';
import {Formik} from 'formik';

import defaultStyle from '../../config/defaultStyle';
import LogoComponent from '../../component/LogoComponent';
import TextInputComponent from '../../component/TextInputComponent';
import colors from '../../config/colors';
import AppButton from '../../component/AppButton';
import Separator from '../../component/Separator';
import Tagline from '../../component/Tagline';
import KeyboardAvoidViewContainer from '../../common/KeyboardAvoidViewContainer';

const validateLogin = Yup.object().shape({
  email: Yup.string()
    .email('Please provide a valid email')
    .required('Email is required')
    .label('Please provide a valid email'),
  password: Yup.string().required('No password provided.'),
});

function LoginScreen(props) {
  console.log(props);
  const [passwordHidden, setPasswordHidden] = useState(true);
  //const {signIn} = useContext();

  const showPassword = (
    <IonIcon name="eye-outline" size={24} color={colors.primaryButtonColor} />
  );

  const hidePassword = (
    <IonIcon name="eye-off-outline" size={24} color={colors.eyeColor} />
  );

  const facebookIcon = (
    <MaterialIcon name="facebook" size={30} color={colors.iconColor} />
  );

  function handleLogin() {
    signIn({username, password});
  }

  const EyesIcon = (
    <TouchableWithoutFeedback
      onPress={() => setPasswordHidden(!passwordHidden)}>
      {passwordHidden ? hidePassword : showPassword}
    </TouchableWithoutFeedback>
  );

  return (
    <KeyboardAvoidViewContainer>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validateLogin}
        onSubmit={handleLogin}>
        {({
          handleChange,
          handleSubmit,
          values,
          setFieldTouched,
          touched,
          errors,
        }) => (
          <>
            <View style={defaultStyle.container}>
              <LogoComponent />
              <TextInputComponent
                placeholder="Phone number, email address or username"
                keyboardType="email-address"
                autoCapitalize="none"
                onBlur={() => setFieldTouched('email')}
                onChangeText={handleChange('email')}
                value={values.email}
              />
              <View>
                {touched.email && (
                  <Text style={{color: 'red'}}>{errors.email} </Text>
                )}
              </View>
              <TextInputComponent
                placeholder="Password"
                icon={EyesIcon}
                secureTextEntry={passwordHidden}
                onChangeText={handleChange('password')}
                value={values.password}
              />
              <View>
                {touched.password && (
                  <Text style={{color: 'red'}}>{errors.password} </Text>
                )}
              </View>
              <AppButton
                title="Log In"
                bgButtonColor="primaryButtonColor"
                textColor="primary"
                onPressed={handleSubmit}
                disabled={
                  !(values.email.length !== 0 && values.password.length !== 0)
                }
              />
              <Tagline
                description="Forgotten your login details?"
                action="Get help with logging in."
              />

              <Separator title="OR" />
              <AppButton
                title="Log In With Facebook"
                icon={facebookIcon}
                bgButtonColor="primary"
                textColor="iconColor"
              />
            </View>
            <Tagline
              description="Don't have an account?"
              action="Sign up."
              styled={styles.styled}
            />
          </>
        )}
      </Formik>
    </KeyboardAvoidViewContainer>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  styled: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: colors.eyeColor,
  },
});
