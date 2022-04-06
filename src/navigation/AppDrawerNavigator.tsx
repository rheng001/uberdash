import * as React from 'react';
import {View, Text} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  RootStackParams,
  RestaurantStackParams,
  UserStackParams,
} from '@interfaces/interfaces';

import HomeScreen from '@screens/Home/HomeScreen';
import RestaurantScreen from '@screens/Restaurant/RestaurantScreen';
import UserScreen from '@screens/User/UserScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from '@assets/icons/HomeIcon';
import RestaurantIcon from '@assets/icons/RestaurantIcon';
import UserIcon from '@assets/icons/UserIcon';
import {createDrawerNavigator} from '@react-navigation/drawer';

const queryClient = new QueryClient();

const RootStack = createDrawerNavigator<RootStackParams>();
const RestaurantStack = createNativeStackNavigator<RestaurantStackParams>();
const UserStack = createNativeStackNavigator<UserStackParams>();

const UserScreenStack = () => {
  return (
    <UserStack.Navigator
      initialRouteName="User"
      screenOptions={{headerShown: false}}>
      <UserStack.Screen name="User" component={UserScreen} />
      <UserStack.Screen name="Restaurants" component={RestaurantScreen} />
    </UserStack.Navigator>
  );
};

const RestaurantScreenStack = () => {
  return (
    <RestaurantStack.Navigator
      initialRouteName="Restaurants"
      screenOptions={{headerShown: false}}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantScreen}
        options={({route}) => ({title: route.params.name})}
      />
    </RestaurantStack.Navigator>
  );
};

const AppDrawerNavigator = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            // headerShown: false,
            drawerInactiveTintColor: 'gray',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerIcon: ({color, size}) => (
                <HomeIcon color={color} size={size} />
              ),
              drawerLabel: 'Home',
            }}
          />
          <RootStack.Screen
            name="UserStack"
            component={UserScreenStack}
            options={{
              drawerIcon: ({color, size}) => (
                <UserIcon color={color} size={size} />
              ),
              drawerLabel: 'Profile',
            }}
          />
          <RootStack.Screen
            name="RestaurantStack"
            component={RestaurantScreenStack}
            options={{
              drawerIcon: ({color, size}) => (
                <RestaurantIcon color={color} size={size} />
              ),
              drawerLabel: 'Restaurants',
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default AppDrawerNavigator;
