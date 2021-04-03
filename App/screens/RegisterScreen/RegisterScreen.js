import React from 'react';
import {View} from 'react-native';

import defaultStyle from '../../config/defaultStyle';
import LogoComponent from '../../component/LogoComponent';
import TextInputComponent from '../../component/TextInputComponent';
import KeyboardAvoidViewContainer from '../../common/KeyboardAvoidViewContainer';

function RegisterScreen() {
  return (
    <KeyboardAvoidViewContainer>
      <View style={defaultStyle.container}>
        <LogoComponent />
        <TextInputComponent
          autoCapitalize="none"
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInputComponent
          autoCapitalize="none"
          keyboardType="default"
          placeholder="Password"
        />
        <TextInputComponent
          autoCapitalize="none"
          keyboardType="default"
          placeholder="Confirm Password"
        />
      </View>
    </KeyboardAvoidViewContainer>
  );
}

export default RegisterScreen;
