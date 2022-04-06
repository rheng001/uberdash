import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {elevation} from '@common/styles';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams, RestaurantStackParams} from '@interfaces/interfaces';

interface Restaurant {
  image_url: string;
  name: string;
  rating: number;
  price: number;
  id: number;
}

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({restaurant}: RestaurantItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('RestaurantStack', {
          screen: 'Restaurants',
          params: {
            name: restaurant.name,
            id: restaurant.id,
          },
        });
      }}>
      <View style={[styles.container, styles.elevation]}>
        <Image source={{uri: restaurant.image_url}} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{restaurant.name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{restaurant.rating}</Text>
            <Text style={styles.money}>{restaurant.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 100,
    alignSelf: 'stretch',
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  elevation,
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    flexDirection: 'row',
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: 'gold',
  },
});

export default RestaurantItem;
