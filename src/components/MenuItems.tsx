import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

interface MenuItemProps {}

const foods = [
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechmel',
    price: '$13.50',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    id: uuidv4(),
  },
  {
    title: 'Lasagna',
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

const MenuItems = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 40}}>
      {foods.map(food => {
        return (
          <View key={food.id}>
            <View style={styles.menuItemStyle}>
              <FoodInfo food={food} />
              <FoodImage food={food} />
            </View>
            <Divider />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  foodInfo: {
    width: 240,
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
