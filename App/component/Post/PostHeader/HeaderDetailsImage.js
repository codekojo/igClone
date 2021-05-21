import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

function HeaderDetailsImage({profilePic}) {
  return (
    <View style={styles.storyBorder}>
      <Image
        style={styles.story}
        source={{
          uri: profilePic,
        }}
      />
    </View>
  );
}

export default HeaderDetailsImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  story: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  storyBorder: {
    borderWidth: 2,
    width: 50,
    borderColor: '#ff8a00',
    borderRadius: 50 / 2,
    margin: 5,
    padding: 3,
  },
});
