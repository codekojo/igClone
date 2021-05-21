import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderDetailsImage from './HeaderDetailsImage';
import HeaderDetailsUserName from './HeaderDetailsUserName';
import HeaderDetailsIcon from './HeaderDetailsIcon';

function PostHeaderIndex({profilePic, profileName}) {
  return (
    <View style={styles.container}>
      <HeaderDetailsImage profilePic={profilePic} />
      <HeaderDetailsUserName profileName={profileName} />
      <HeaderDetailsIcon />
    </View>
  );
}

export default PostHeaderIndex;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
