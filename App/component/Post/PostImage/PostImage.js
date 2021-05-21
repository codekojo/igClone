import React from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';

function PostImage({postPicture}) {
  return (
    <Image
      resizeMode="cover"
      style={styles.imgStyle}
      source={{
        uri: postPicture,
      }}
    />
  );
}

export default PostImage;

const styles = StyleSheet.create({
  imgStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});
