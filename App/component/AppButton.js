import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet, alert} from 'react-native';

import colors from '../config/colors';

function AppButton({
  title,
  onPressed,
  textColor = 'primary',
  bgButtonColor = 'primary',
}) {
  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor="white"
      onPress={onPressed ? onPressed : () => console.log('Yyyyy')}>
      <View
        style={[styles.container, {backgroundColor: colors[bgButtonColor]}]}>
        <Text style={[styles.textStyle, {color: colors[textColor]}]}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    backgroundColor: colors.primaryButtonColor,
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 18,
    color: colors.primary,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});
