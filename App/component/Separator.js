import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../config/colors';

function Separator({title}) {
  const LineComponent = () => <View style={styles.lineComponent} />;
  return (
    <View style={styles.container}>
      <LineComponent />
      <View>
        <Text style={styles.lineTextStyle}>{title}</Text>
      </View>
      <LineComponent />
    </View>
  );
}

export default Separator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    alignSelf: 'center',
    marginVertical: 15,
  },
  lineComponent: {flex: 1, height: 1, backgroundColor: colors.eyeColor},
  lineTextStyle: {
    width: 60,
    textAlign: 'center',
    color: colors.eyeColor,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
