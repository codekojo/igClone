import React from 'react';
import {Text, TouchableWithoutFeedback, StyleSheet, View} from 'react-native';
import colors from '../config/colors';

function Tagline({description, action, styled}) {
  return (
    <TouchableWithoutFeedback onPress={() => console.log('Bow')}>
      <View style={[styles.Container, styled]}>
        <Text style={styles.containerStyle}>{description}</Text>
        <Text style={styles.containerStyles}> {action}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Tagline;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  containerStyle: {
    fontSize: 13,
    color: colors.eyeColor,
  },
  containerStyles: {
    fontSize: 13,
    color: 'blue',
    fontWeight: 'bold',
  },
});
