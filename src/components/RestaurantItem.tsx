import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {elevation} from '@common/styles';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams, RestaurantStackParams} from '@interfaces/interfaces';
import {viewportHeight, viewportWidth} from '@common/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <>
      <TouchableOpacity
        style={{position: 'absolute', right: 15, top: 20, zIndex: 2}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
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
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{restaurant.rating}</Text>
            </View>
          </View>
          <View style={styles.info}>
            <Text>30-45 * min</Text>
            <Text style={styles.money}>{restaurant.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    maxWidth: imageWidth,
    alignSelf: 'stretch',
    marginVertical: 10,
    flexDirection: 'column',
    marginRight: 10,
  },
  elevation,
  image: {
    width: imageWidth,
    height: imageHeight,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  info: {
    flexDirection: 'row',
    marginHorizontal: 5,
    overflow: 'visible',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: 5,
    marginHorizontal: 5,
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 2,
    color: 'black',
  },
  rating: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 10,
  },
  ratingContainer: {
    backgroundColor: '#eee',
    borderRadius: 15,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  money: {
    color: 'gold',
    marginLeft: 20,
  },
});

export default RestaurantItem;
