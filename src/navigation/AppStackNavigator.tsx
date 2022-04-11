import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '@screens/Home/HomeScreen';
import BrowseScreen from '@screens/Browse/BrowseScreen';
import CartScreen from '@screens/Cart/CartScreen';
import UserScreen from '@screens/User/UserScreen';

import LoginScreen from '@screens/Login/LoginScreen';
import SignUpScreen from '@screens/SignUp/SignUpScreen';
import OrderScreen from '@screens/Cart/OrderScreen';

import RestaurantScreen from '@screens/Restaurant/RestaurantScreen';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Restaurants" component={RestaurantScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
    </Stack.Navigator>
  );
};

const BrowseStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Browse" component={BrowseScreen} />
    </Stack.Navigator>
  );
};

const CartStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

const UserStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  BrowseStackNavigator,
  CartStackNavigator,
  UserStackNavigator,
  AuthStackNavigator,
};
