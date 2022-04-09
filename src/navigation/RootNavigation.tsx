import * as React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  RootStackParams,
  RestaurantStackParams,
  UserStackParams,
  AuthStackParams,
  HomeStackParams,
  BrowseStackParams,
  CartStackParams,
} from '@interfaces/interfaces';

import HomeScreen from '@screens/Home/HomeScreen';
import BrowseScreen from '@screens/Browse/BrowseScreen';
import CartScreen from '@screens/Cart/CartScreen';
import OrderScreen from '@screens/Cart/OrderScreen';
import RestaurantScreen from '@screens/Restaurant/RestaurantScreen';
import UserScreen from '@screens/User/UserScreen';
import LoginScreen from '@screens/Login/LoginScreen';
import SignUpScreen from '@screens/SignUp/SignUpScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from '@assets/icons/HomeIcon';
import RestaurantIcon from '@assets/icons/RestaurantIcon';
import UserIcon from '@assets/icons/UserIcon';
import SearchIcon from '@assets/icons/SearchIcon';
import CartIcon from '@assets/icons/CartIcon';

const RootStack = createBottomTabNavigator<RootStackParams>();
const AuthStack = createNativeStackNavigator<AuthStackParams>();
const HomeStack = createNativeStackNavigator<HomeStackParams>();
const BrowseStack = createNativeStackNavigator<BrowseStackParams>();
const CartStack = createNativeStackNavigator<CartStackParams>();
const RestaurantStack = createNativeStackNavigator<RestaurantStackParams>();
const UserStack = createNativeStackNavigator<UserStackParams>();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="User" component={UserScreen} />
      <HomeStack.Screen name="Restaurants" component={RestaurantScreen} />
      <HomeStack.Screen name="Order" component={OrderScreen} />
    </HomeStack.Navigator>
  );
};

const BrowseScreenStack = () => {
  return (
    <BrowseStack.Navigator
      initialRouteName="Browse"
      screenOptions={{headerShown: false}}>
      <BrowseStack.Screen name="Home" component={HomeScreen} />
      <BrowseStack.Screen name="Browse" component={BrowseScreen} />
      <BrowseStack.Screen name="User" component={UserScreen} />
      <BrowseStack.Screen name="Restaurants" component={RestaurantScreen} />
    </BrowseStack.Navigator>
  );
};

const CartScreenStack = () => {
  return (
    <CartStack.Navigator
      initialRouteName="Cart"
      screenOptions={{headerShown: false}}>
      <CartStack.Screen name="Cart" component={CartScreen} />
      <CartStack.Screen name="Home" component={HomeScreen} />
      <CartStack.Screen name="Browse" component={BrowseScreen} />
      <CartStack.Screen name="User" component={UserScreen} />
      <CartStack.Screen name="Restaurants" component={RestaurantScreen} />
    </CartStack.Navigator>
  );
};

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

const AuthScreenStack = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
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

const RootNavigation = () => {
  // const user = useSelector((state: AppState) => state.currentUser)
  const user = false;
  const renderContent = () => {
    const isLoggedIn = false;

    if (isLoggedIn || user) {
      return (
        <RootStack.Navigator
          initialRouteName="HomeStack"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerShown: false,
            tabBarActiveTintColor: '#E67A15',
            tabBarInactiveTintColor: 'gray',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <RootStack.Screen
            name="HomeStack"
            component={HomeScreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <HomeIcon color={color} size={size} />
              ),
              tabBarLabel: 'Home',
            }}
          />
          <RootStack.Screen
            name="BrowseStack"
            component={BrowseScreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <SearchIcon color={color} size={size} />
              ),
              tabBarLabel: 'Browse',
            }}
          />
          <RootStack.Screen
            name="CartStack"
            component={CartScreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <CartIcon color={color} size={size} />
              ),
              tabBarLabel: 'Carts',
            }}
          />
          {/* <RootStack.Screen
            name="RestaurantStack"
            component={RestaurantScreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <RestaurantIcon color={color} size={size} />
              ),
              tabBarLabel: 'Restaurants',
            }}
          /> */}
          <RootStack.Screen
            name="UserStack"
            component={UserScreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <UserIcon color={color} size={size} />
              ),
              tabBarLabel: 'Account',
            }}
          />
        </RootStack.Navigator>
      );
    } else {
      return <AuthScreenStack />;
    }
  };
  return <NavigationContainer>{renderContent()}</NavigationContainer>;
};

export default RootNavigation;
