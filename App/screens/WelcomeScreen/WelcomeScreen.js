import React from 'react';
import {Image, View, TouchableWithoutFeedback, Text} from 'react-native';

import Screen from '../../common/Screen';
import AppButton from '../../component/AppButton';
import defaultStyle from '../../config/defaultStyle';
import LogoComponent from '../../component/LogoComponent';

function WelcomeScreen({navigation}) {
  function handleCreateAccountNavigation() {
    return navigation.navigate('CreateAccount');
  }

  function handleLogInNavigation() {
    return navigation.navigate('LoginPage');
  }

  return (
    <Screen>
      <View style={defaultStyle.container}>
        <LogoComponent />
        <AppButton
          bgButtonColor="primaryButtonColor"
          title="create new account"
          onPressed={handleCreateAccountNavigation}
        />

        <AppButton
          bgButtonColor="primary"
          textColor="secondary"
          title="Log in"
          onPressed={handleLogInNavigation}
        />
      </View>
    </Screen>
  );
}

export default WelcomeScreen;
