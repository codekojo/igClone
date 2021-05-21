import React from 'react';
import {View, SafeAreaView} from 'react-native';

import PostHeaderIndex from './PostHeader/PostHeaderIndex';
import PostImage from './PostImage/PostImage';
import PostFooterIndex from './PostFooter/PostFooterIndex';

function HeaderIndex({userName, imgURI, caption, likeCounter}) {
  return (
    <View style={{marginBottom: 40}}>
      <PostHeaderIndex profilePic={imgURI} profileName={userName} />
      <PostImage postPicture={imgURI} />
      <PostFooterIndex
        profileName={userName}
        userCaption={caption}
        likeCounter={likeCounter}
      />
    </View>
  );
}

export default HeaderIndex;
