import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import defaultStyle from '../../config/defaultStyle';
import LogoComponent from '../../component/LogoComponent';
import TextInputComponent from '../../component/TextInputComponent';
import colors from '../../config/colors';
import AppButton from '../../component/AppButton';
import Separator from '../../component/Separator';

function LoginScreen() {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [password, setPassword] = useState('');

  const showPassword = (
    <Icon name="eye-outline" size={24} color={colors.primaryButtonColor} />
  );

  const hidePassword = (
    <Icon name="eye-off-outline" size={24} color={colors.eyeColor} />
  );

  function handleChangeText(e) {
    let ele = e.trim().split(' ').join();
    console.log(ele);
    // setPassword(ele);
    // console.log(password.trim());
  }

  const EyesIcon = (
    <TouchableWithoutFeedback
      onPress={() => setPasswordHidden(!passwordHidden)}>
      {passwordHidden ? hidePassword : showPassword}
    </TouchableWithoutFeedback>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        enabled="true">
        <View style={defaultStyle.container}>
          <LogoComponent />
          <TextInputComponent
            placeholder="Phone number, email address or username"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInputComponent
            placeholder="Password"
            icon={EyesIcon}
            secureTextEntry={passwordHidden}
            onChangeText={handleChangeText}
          />
          <AppButton
            title="Log In"
            bgButtonColor="primaryButtonColor"
            textColor="primary"
          />
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.containerStyle}>
              Forgotten your login details?
            </Text>
            <Text style={styles.containerStyles}>
              {' '}
              Get help with logging in.
            </Text>
          </View>

          <Separator title="OR" />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  forgotPasswordContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  containerStyle: {
    fontSize: 13,
    color: colors.eyeColor,
  },
  containerStyles: {
    fontSize: 13,
    color: 'blue',
    fontWeight: 'bold',
  },
});
