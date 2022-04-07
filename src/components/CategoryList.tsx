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

  const items = [
    {
      name: 'Pick-up',
      imageUrl: require('../assets/images/shopping-bag.png'),
      id: uuidv4(),
    },
    {
      name: 'Soft Drinks',
      imageUrl: require('../assets/images/soft-drink.png'),
      id: uuidv4(),
    },
    {
      name: 'Bakery Items',
      imageUrl: require('../assets/images/bread.png'),
      id: uuidv4(),
    },
    {
      name: 'Fast Foods',
      imageUrl: require('../assets/images/fast-food.png'),
      id: uuidv4(),
    },
    {
      name: 'Deals',
      imageUrl: require('../assets/images/deals.png'),
      id: uuidv4(),
    },
    {
      name: 'Desserts',
      imageUrl: require('../assets/images/desserts.png'),
      id: uuidv4(),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 15,
    marginTop: 10,
    // paddingLeft: 20,
  },
});

export default CategoryList;
