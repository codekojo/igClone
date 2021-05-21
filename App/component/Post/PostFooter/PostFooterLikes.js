import React from 'react';
import {Text, StyleSheet} from 'react-native';

function PostFooterLikes({likeCounter}) {
  return <Text style={styles.textStyle}>{likeCounter} likes</Text>;
}

export default PostFooterLikes;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
