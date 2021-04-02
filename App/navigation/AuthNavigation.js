import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="WelcomePage">
      <Stack.Screen
        name="WelcomePage"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginScreen}
        options={{
          headerShown: false,
          animationEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
