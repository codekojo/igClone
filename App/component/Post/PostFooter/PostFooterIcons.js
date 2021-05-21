import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function PostFooterLoveIcons() {
  return (
    <TouchableWithoutFeedback>
      <View style={{marginHorizontal: 5}}>
        <SimpleLineIcons name="heart" color="black" size={33} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export function PostFooterCommentIcons() {
  return (
    <TouchableWithoutFeedback>
      <View style={{marginHorizontal: 5}}>
        <EvilIcons name="comment" color="black" size={45} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export function PostFooterSendIcons() {
  return (
    <TouchableWithoutFeedback onPress={() => console.log('Bow')}>
      <View style={{flex: 1}}>
        <SimpleLineIcons name="paper-plane" color="black" size={33} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export function PostFooterBookmarkIcons() {
  return (
    <TouchableWithoutFeedback>
      <Ionicons name="md-bookmark-outline" color="black" size={33} />
    </TouchableWithoutFeedback>
  );
}

export default function PostFooterIcons() {
  return (
    <View style={styles.container}>
      <PostFooterLoveIcons />
      <PostFooterCommentIcons />
      <PostFooterSendIcons />
      <PostFooterBookmarkIcons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
});
