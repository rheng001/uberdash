import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RootStackParams} from '@interfaces/interfaces';

type Props = NativeStackScreenProps<RootStackParams, 'UserStack'>;

const UserScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('RestaurantStack', {
            screen: 'Restaurants',
            params: {
              id: 5,
              name: 'poop',
            },
          })
        }>
        <Text style={{color: 'red'}}>User Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default UserScreen;
