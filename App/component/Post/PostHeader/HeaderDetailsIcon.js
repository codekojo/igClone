import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

function HeaderDetailsIcon() {
  return (
    <TouchableWithoutFeedback>
      <Icon name="more-vertical" color="black" size={33} />
    </TouchableWithoutFeedback>
  );
}

export default HeaderDetailsIcon;
