import React from 'react';
import {View} from 'react-native';
import PostFooterIcons from './PostFooterIcons';
import PostFooterLikes from './PostFooterLikes';
import PostFooterUserDetails from './PostFooterUserDetails';

function PostFooterIndex({profileName, userCaption, likeCounter}) {
  return (
    <View>
      <PostFooterIcons />
      <View style={{marginHorizontal: 10}}>
        <PostFooterLikes likeCounter={likeCounter} />
        <PostFooterUserDetails
          profileName={profileName}
          userCaption={userCaption}
        />
      </View>
    </View>
  );
}

export default PostFooterIndex;
