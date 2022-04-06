import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DrawerMenuIcon from '@assets/icons/DrawerMenuIcon';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootStackParams} from '@interfaces/interfaces';

const TopDrawerNavigation = ({}) => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParams>>();

  return (
    <View>
      <TouchableHighlight
        underlayColor={'#f0ddcc'}
        style={styles.backButton}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <DrawerMenuIcon color="#3333" size={20} />
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

export default TopDrawerNavigation;
