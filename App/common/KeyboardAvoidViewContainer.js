import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import colors from '../config/colors';

function KeyboardAvoidViewContainer({children}) {
  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled="true">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        {children}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default KeyboardAvoidViewContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
});
