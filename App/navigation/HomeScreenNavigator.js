import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';

import IndexPost from '../component/Post/IndexPost';
IndexPost;

const HomeStack = createStackNavigator();
function HomeScreenNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="AccountInfo"
        component={IndexPost}
        options={{
          headerStyle: {
            height: 95,
          },
          headerLeft: () => {
            return <Feather name="camera" color="black" size={33} />;
          },
          headerLeftContainerStyle: {
            paddingHorizontal: 10,
          },

          headerRight: () => {
            return (
              <Ionicons name="paper-plane-outline" color="black" size={33} />
            );
          },
          headerRightContainerStyle: {
            paddingHorizontal: 10,
          },
          headerTitle: () => {
            return (
              <Image
                resizeMode="cover"
                style={{width: 150, height: 45}}
                source={require('../assets/images/ig_image.png')}
              />
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeScreenNavigator;
