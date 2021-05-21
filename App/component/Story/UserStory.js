import React from 'react';
import {Image, View, StyleSheet, Text, SafeAreaView} from 'react-native';
import Screen from '../../common/Screen';
import defaultStyle from '../../config/defaultStyle';

function UserStory({userName, imageUri}) {
  return (
    <View style={styles.container}>
      <View style={styles.storyBorder}>
        <Image
          resizeMode="cover"
          style={styles.story}
          source={{
            uri: imageUri,
          }}
        />
      </View>
      <Text>{userName}</Text>
    </View>
  );
}

export default UserStory;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 5,
  },
  story: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
  },
  storyBorder: {
    borderWidth: 4,
    width: 80,
    borderColor: '#ae22e0',
    borderRadius: 80 / 2,
    margin: 3,
    padding: 4,
  },
});
