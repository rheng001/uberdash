import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {addToCart, cartSelector, selectedItems} from '@redux/slices/cartSlice';
import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {foods} from '@static/data';

interface MenuItemProps {}

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
    <View style={styles.foodInfo}>
      <Text style={styles.titleStyle}>{food.title}</Text>
      <Text style={styles.blackText}>{food.description}</Text>
      <Text style={styles.blackText}>{food.price}</Text>
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
  const {selectedItems} = useAppSelector(cartSelector);

  const cartItems = selectedItems.items;

  const isFoodInCart = (food: Food, cartItems: any) => {
    return Boolean(cartItems.find((item: Food) => item.title === food.title));
  };

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
                isChecked={isFoodInCart(food, cartItems)}
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
    color: 'black',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  blackText: {
    color: 'black',
  },
});

export default MenuItems;
