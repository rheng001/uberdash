import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {addToCart} from '@redux/slices/cartSlice';
import {useAppDispatch, useAppSelector} from '@redux/hooks';

interface MenuItemProps {}

const foods = [
  {
    title: 'Fried Rice 1',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Fried Rice 2',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Fried Rice 3',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Fried Rice 4',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Fried Rice 5',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Fried Rice 6',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Fried Rice 7',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Fried Rice 8',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
];

interface Food {
  title: string;
  description: string;
  price: string;
  id: string;
}

interface FoodItem {
  food: Food;
}

interface RestaurantName {
  resturantName: string;
}

const Divider = () => {
  return (
    <View
      style={{
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        paddingTop: 10,
      }}
    />
  );
};

const FoodInfo = ({food}: FoodItem) => {
  return (
    <View key={food.id} style={styles.foodInfo}>
      <Text style={styles.titleStyle}>{food.title}</Text>
      <Text>{food.description}</Text>
      <Text>{food.price}</Text>
    </View>
  );
};

const FoodImage = ({food}: any) => {
  return (
    <View>
      <Image source={{uri: food.image}} style={styles.image} />
    </View>
  );
};

const MenuItems = ({resturantName}: RestaurantName) => {
  const dispatch = useAppDispatch();

  return (
    <View style={{marginBottom: 40}}>
      {foods.map(food => {
        return (
          <View key={food.id}>
            <View style={styles.menuItemStyle}>
              <BouncyCheckbox
                iconStyle={{
                  borderColor: 'lightgray',
                  borderRadius: 0,
                }}
                fillColor="green"
                onPress={checkboxValue =>
                  dispatch(
                    addToCart({
                      ...food,
                      resturantName,
                      checkboxValue: checkboxValue,
                    }),
                  )
                }
              />
              <FoodInfo food={food} />
              <FoodImage food={food} />
            </View>
            <Divider />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  foodInfo: {
    width: 200,
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default MenuItems;
