import React from 'react';
import {Image} from 'react-native';

import defaultStyle from '../../config/defaultStyle';

function LogoComponent() {
  return (
    <Image
      resizeMode="contain"
      style={defaultStyle.imageLogoStyle}
      source={require('../../assets/images/ig_image.png')}
    />
  );
}

export default LogoComponent;
