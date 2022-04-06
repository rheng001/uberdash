import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {elevation} from '@common/styles';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams, RestaurantStackParams} from '@interfaces/interfaces';
import {viewportHeight, viewportWidth} from '@common/styles';

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
const imageWidth = Math.round((viewportWidth * 9) / 16);
const imageHeight = Math.round((viewportWidth * 9) / 24);

const RestaurantItem = ({restaurant}: RestaurantItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('HomeStack', {
          screen: 'Restaurants',
          params: {
            name: restaurant.name,
            id: restaurant.id,
          },
        });
      }}>
      <View style={[styles.container]}>
        <Image source={{uri: restaurant.image_url}} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.header} numberOfLines={1} ellipsizeMode="tail">
            {restaurant.name}
          </Text>
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
    height: 200,
    alignSelf: 'stretch',
    marginVertical: 10,
    flexDirection: 'column',
    maxWidth: imageWidth,
    marginRight: 10,
  },
  elevation,
  image: {
    width: imageWidth,
    height: imageHeight,
    marginRight: 10,
    borderRadius: 15,
  },
  infoContainer: {
    marginVertical: 5,
    marginHorizontal: 5,
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
    color: 'red',
  },
  money: {
    color: 'gold',
  },
});

export default RestaurantItem;
