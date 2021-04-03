import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import defaultStyle from '../../config/defaultStyle';
import LogoComponent from '../../component/LogoComponent';
import TextInputComponent from '../../component/TextInputComponent';
import colors from '../../config/colors';
import AppButton from '../../component/AppButton';
import Separator from '../../component/Separator';
import Tagline from '../../component/Tagline';
import KeyboardAvoidViewContainer from '../../common/KeyboardAvoidViewContainer';

function LoginScreen() {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const isEnabled = email.length > 0 && password.length > 0;

  console.log('www', isEnabled);

  const showPassword = (
    <IonIcon name="eye-outline" size={24} color={colors.primaryButtonColor} />
  );

  const hidePassword = (
    <IonIcon name="eye-off-outline" size={24} color={colors.eyeColor} />
  );

  const facebookIcon = (
    <MaterialIcon name="facebook" size={30} color={colors.iconColor} />
  );

  function handlePasswordChange(e) {
    let userPassword = e.trim().split(' ').join();
    setPassword(userPassword);
    setBtnDisabled(isEnabled);
  }

  function handleEmailChange(e) {
    let userEmail = e.trim();
    setEmail(userEmail);
    setBtnDisabled(isEnabled);
  }

  const EyesIcon = (
    <TouchableWithoutFeedback
      onPress={() => setPasswordHidden(!passwordHidden)}>
      {passwordHidden ? hidePassword : showPassword}
    </TouchableWithoutFeedback>
  );

  return (
    <KeyboardAvoidViewContainer>
      <View style={defaultStyle.container}>
        <LogoComponent />
        <TextInputComponent
          placeholder="Phone number, email address or username"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={handleEmailChange}
          valeu={email}
        />
        <TextInputComponent
          placeholder="Password"
          icon={EyesIcon}
          secureTextEntry={passwordHidden}
          onChangeText={handlePasswordChange}
          value={password}
        />
        <AppButton
          title="Log In"
          bgButtonColor="primaryButtonColor"
          textColor="primary"
          disabled={!isEnabled}
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
