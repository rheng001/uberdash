import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {getPopular} from '@api/YelpApi';
import {useQuery} from 'react-query';
import {SearchContextType, SearchContext} from '@context/SearchContext';
import RestaurantItem from '@components/RestaurantItem';

import {viewportHeight, viewportWidth} from '@common/styles';

const PopularList = ({}) => {
  const {category, searchTerm} = useContext(SearchContext) as SearchContextType;

  const {
    data: restuarants,
    isLoading,
    isError,
  } = useQuery(['popular', category], getPopular, {
    keepPreviousData: true,
    enabled: Boolean(category),
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error...</Text>;
  }

  console.log(restuarants);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popular Places</Text>
      <FlatList
        data={restuarants.businesses}
        keyExtractor={restuarants => restuarants.id}
        renderItem={({item}) => {
          return <RestaurantItem restaurant={item} />;
        }}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
    height: 250,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 10,
  },
});

export default PopularList;
