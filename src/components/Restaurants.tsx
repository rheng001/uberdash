import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {doBusinessSearch} from '@api/YelpApi';
import {useQuery} from 'react-query';
import {SearchContextType, SearchContext} from '@context/SearchContext';
import RestaurantItem from '@components/RestaurantItem';

import {viewportHeight, viewportWidth} from '@common/styles';

interface RestaurantsProps {}

const Restaurants: React.FC<RestaurantsProps> = ({}) => {
  const {category, searchTerm} = useContext(SearchContext) as SearchContextType;

  const {
    data: restuarants,
    isLoading,
    isError,
  } = useQuery(['search_term', category], doBusinessSearch, {
    keepPreviousData: true,
    enabled: Boolean(category),
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error...</Text>;
  }

  // console.log(restuarants);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={restuarants.businesses}
        keyExtractor={restuarants => restuarants.id}
        renderItem={({item}) => {
          return <RestaurantItem restaurant={item} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 25,
    marginTop: 10,
    flex: 1,
    height: 290,
    backgroundColor: 'white',
    padding: 15,
  },
  header: {
    fontWeight: '900',
    fontSize: 25,
    paddingBottom: 10,
    color: 'black',
  },
});

export default Restaurants;
