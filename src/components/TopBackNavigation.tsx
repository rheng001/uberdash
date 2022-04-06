import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '@assets/icons/BackIcon';

interface TopBackNavigationProps {}

const TopBackNavigation: React.FC<TopBackNavigationProps> = ({}) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableHighlight
        underlayColor={'#f0ddcc'}
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <BackIcon color="#3333" size={20} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  backButton: {
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopBackNavigation;
