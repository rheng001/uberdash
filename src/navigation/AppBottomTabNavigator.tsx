import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeStackNavigator,
  BrowseStackNavigator,
  CartStackNavigator,
  UserStackNavigator,
} from '@navigation/AppStackNavigator';

import HomeIcon from '@assets/icons/HomeIcon';
import UserIcon from '@assets/icons/UserIcon';
import SearchIcon from '@assets/icons/SearchIcon';
import CartIcon from '@assets/icons/CartIcon';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
          tabBarLabel: 'Home',
        }}
      />
      <BottomTab.Screen
        name="BrowseStack"
        component={BrowseStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <SearchIcon color={color} size={size} />
          ),
          tabBarLabel: 'Browse',
        }}
      />
      <BottomTab.Screen
        name="CartStack"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => <CartIcon color={color} size={size} />,
          tabBarLabel: 'Carts',
        }}
      />
      <BottomTab.Screen
        name="UserStack"
        component={UserStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => <UserIcon color={color} size={size} />,
          tabBarLabel: 'Account',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
