import colors from '../../config/colors';
import {Platform, StatusBar} from 'react-native';

export default {
  imageLogoStyle: {
    width: '100%',
    height: '10%',
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    margin: 15,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  defaultContainerStyle: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  safeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
  },
};
