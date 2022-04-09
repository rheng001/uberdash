import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '@interfaces/interfaces';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {getBusiness} from '@api/YelpApi';
import {useQuery} from 'react-query';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {viewportWidth, viewportHeight} from '@common/styles';
import TopBackNavigation from '@components/TopBackNavigation';
import MenuItems from '@components/MenuItems';
import ViewCart from '@components/ViewCart';

type Props = NativeStackScreenProps<RootStackParams, 'Restaurants'>;

interface RestaurantItem {
  title: string;
}

interface Restaurant {
  restaurant: RestaurantItem;
}

const imageHeight = Math.round((viewportWidth * 9) / 16);

const Divider = () => {
  return (
    <View
      style={{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingTop: 10,
      }}
    />
  );
};

const RestaurantScreen = ({route}: Props) => {
  const {id} = route.params;
  const {
    data: restaurant,
    isLoading,
    isError,
  } = useQuery(['restaurant', id], getBusiness);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  console.log('data is' + JSON.stringify(restaurant));
  return (
    <>
      <View style={{height: viewportHeight}}>
        {/* <TopBackNavigation /> */}

        <Image
          source={{uri: restaurant.image_url}}
          style={styles.headerImage}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 90}}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>
              ★ {restaurant.rating ? restaurant.rating : ''}
            </Text>
            <Text style={styles.descriptionText}>
              {' '}
              ({restaurant.review_count ? restaurant.review_count : ''} ratings)
              {' • '}
            </Text>
            {restaurant.categories.map(
              (category: RestaurantItem, index: number) => {
                return (
                  <View key={category.title}>
                    <Text style={styles.descriptionText}>
                      {category.title} •{' '}
                    </Text>
                  </View>
                );
              },
            )}
            <Text style={styles.priceText}>
              {restaurant.price ? restaurant.price : '$'}
            </Text>
          </View>
          <Divider />
          <MenuItems resturantName={restaurant.name} hideCheckbox={false} />
        </ScrollView>
        <ViewCart />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: imageHeight,
    width: viewportWidth,
  },
  headerImage: {
    width: viewportWidth,
    height: 150,
  },
  name: {
    fontSize: 29,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 15,
    color: 'black',
  },
  description: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  priceText: {
    color: 'green',
  },
  descriptionText: {
    fontWeight: '600',
    fontSize: 13,
    color: 'black',
  },
});

export default RestaurantScreen;
