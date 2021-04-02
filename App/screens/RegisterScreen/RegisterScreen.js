import React from 'react';
import {View} from 'react-native';

import Screen from '../../common/Screen';
import defaultStyle from '../../config/defaultStyle';
import LogoComponent from '../../component/LogoComponent';

function RegisterScreen() {
  return (
    <Screen>
      <View style={defaultStyle.defaultContainerStyle}>
        <LogoComponent />
      </View>
    </Screen>
  );
}

export default RegisterScreen;
