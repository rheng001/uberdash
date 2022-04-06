import {StyleSheet, Dimensions, Platform} from 'react-native';

export const elevation = {
  shadowColor: 'black',
  shadowOffset: {width: 5, height: 5},
  elevation: 3,
  shadowOpacity: 0.1,
};

export const {width: viewportWidth, height: viewportHeight} =
  Dimensions.get('window');

  