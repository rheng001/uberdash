import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textDelivery}>Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textPickup}>Pickup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginHorizontal: 25,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
    marginHorizontal: 15,
  },
  textDelivery: {
    color: 'white',
  },
  textPickup: {
    color: 'gray',
  },
});
export default Header;
