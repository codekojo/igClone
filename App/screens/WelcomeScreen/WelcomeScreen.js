import React from 'react';
import {Image, View} from 'react-native';

import Screen from '../../common/Screen';
import AppButton from '../../component/AppButton';
import defaultStyle from '../../config/defaultStyle';

function WelcomeScreen() {
  return (
    <Screen>
      <View style={defaultStyle.container}>
        <Image
          resizeMode="contain"
          style={defaultStyle.imageLogoStyle}
          source={require('../../assets/images/ig_image.png')}
        />
        <AppButton
          bgButtonColor="primaryButtonColor"
          title="create new account"
        />
        <AppButton
          bgButtonColor="primary"
          textColor="secondary"
          title="Log in"
        />
      </View>
    </Screen>
  );
}

export default WelcomeScreen;
