import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.boldHeader}>Delicious meal!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 35,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
export default Header;
