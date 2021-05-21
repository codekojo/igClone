import React from 'react';
import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';
import colors from '../config/colors';

function Screen({children, bgColor = 'primary'}) {
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors[bgColor]}]}>
      {children}
    </SafeAreaView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
});
