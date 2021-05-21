import React from 'react';
import {TextInput, View, StyleSheet, firstIcon} from 'react-native';

function TextInputComponent({icon, ...rest}) {
  const iconAvailable = {
    width: icon ? '85%' : '100%',
  };

  return (
    <View style={[styles.container, styles.input]}>
      {firstIcon && firstIcon}
      <TextInput style={[styles.inputTextStyle, iconAvailable]} {...rest} />
      {icon && icon}
    </View>
  );
}

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  input: {
    width: '100%',
    borderWidth: 0.2,
    borderColor: 'grey',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FAFAFA',
  },

  inputTextStyle: {
    fontSize: 16,
  },
});
