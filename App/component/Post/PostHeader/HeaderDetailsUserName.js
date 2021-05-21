import React from 'react';
import {Text, StyleSheet} from 'react-native';

function HeaderDetailsUserName({profileName}) {
  return <Text style={styles.textStyle}>{profileName}</Text>;
}

export default HeaderDetailsUserName;

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    fontSize: 20,
    textTransform: 'lowercase',
    marginHorizontal: 5,
    fontWeight: '400',
  },
});
