import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  RootStackParams,
  RestaurantStackParams,
  UserStackParams,
  AuthStackParams,
  HomeStackParams,
} from '@interfaces/interfaces';

import HomeScreen from '@screens/Home/HomeScreen';
import RestaurantScreen from '@screens/Restaurant/RestaurantScreen';
import UserScreen from '@screens/User/UserScreen';
import LoginScreen from '@screens/Login/LoginScreen';
import SignUpScreen from '@screens/SignUp/SignUpScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from '@assets/icons/HomeIcon';
import RestaurantIcon from '@assets/icons/RestaurantIcon';
import UserIcon from '@assets/icons/UserIcon';

const queryClient = new QueryClient();

const RootStack = createBottomTabNavigator<RootStackParams>();
const RestaurantStack = createNativeStackNavigator<RestaurantStackParams>();
const UserStack = createNativeStackNavigator<UserStackParams>();
const AuthStack = createNativeStackNavigator<AuthStackParams>();
const HomeStack = createNativeStackNavigator<HomeStackParams>();

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

const App = () => {
  // const user = useSelector((state: AppState) => state.currentUser)
  const user = true;
  const renderContent = () => {
    const isLoggedIn = true;

    if (isLoggedIn || user) {
      return (
        <RootStack.Navigator
          initialRouteName="Home"
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
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <HomeIcon color={color} size={size} />
              ),
              tabBarLabel: 'Home',
            }}
          />
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
          <RootStack.Screen
            name="RestaurantStack"
            component={RestaurantScreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <RestaurantIcon color={color} size={size} />
              ),
              tabBarLabel: 'Restaurants',
            }}
          />
        </RootStack.Navigator>
      );
    } else {
      return <AuthScreenStack />;
    }
  };
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>{renderContent()}</NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
