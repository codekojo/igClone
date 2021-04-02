import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './App/navigation/AuthNavigation';
import Appx from './App/navigation/SignUpNavigation';

function App() {
  const user = false;
  return (
    <NavigationContainer>
      {user ? <Appx /> : <AuthNavigation />}
    </NavigationContainer>
  );
}

export default App;
