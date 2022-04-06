import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import {SearchContextType, SearchContext} from '@context/SearchContext';

import CategoryItem from '@components/CategoryItem';

const CategoryList = () => {
  const {category, searchTerm} = useContext(SearchContext) as SearchContextType;

  const commonCategories = [
    {
      name: 'Burger',
      imageUrl: require('../assets/images/burger.png'),
      id: uuidv4(),
    },
    {
      name: 'Pizza',
      imageUrl: require('../assets/images/pizza.png'),
      id: uuidv4(),
    },
    {
      name: 'Dessert',
      imageUrl: require('../assets/images/cake.png'),
      id: uuidv4(),
    },
    {
      name: 'Drinks',
      imageUrl: require('../assets/images/smoothies.png'),
      id: uuidv4(),
    },
    {
      name: 'Steak',
      imageUrl: require('../assets/images/steak.png'),
      id: uuidv4(),
    },
    {
      name: 'Pasta',
      imageUrl: require('../assets/images/pasta.png'),
      id: uuidv4(),
    },
  ];

  return (
    <View>
      <FlatList
        data={commonCategories}
        renderItem={({item, index}) => {
          return (
            <CategoryItem
              name={item.name}
              imageUrl={item.imageUrl}
              index={index}
              active={item.name === category}
              handlePress={() => searchTerm(item.name)}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={category => category.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryList;
