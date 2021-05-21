import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function PostFooterUserDetails({profileName, userCaption}) {
  return (
    <View style={styles.container}>
      <Text style={styles.baseStyle}>
        <Text style={styles.textStyle}>{profileName} </Text>
        <Text style={styles.textStyleX}>{userCaption}</Text>
      </Text>
    </View>
  );
}

export default PostFooterUserDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  baseStyle: {
    fontSize: 18,
  },
  textStyle: {
    fontWeight: 'bold',
    textTransform: 'lowercase',
  },
});
