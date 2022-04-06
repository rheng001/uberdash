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

const queryClient = new QueryClient();

const RootStack = createBottomTabNavigator<RootStackParams>();
const RestaurantStack = createNativeStackNavigator<RestaurantStackParams>();
const UserStack = createNativeStackNavigator<UserStackParams>();

const UserScreenStack = () => {
  return (
    <UserStack.Navigator initialRouteName="User">
      <UserStack.Screen name="User" component={UserScreen} />
      <UserStack.Screen name="Restaurants" component={RestaurantScreen} />
    </UserStack.Navigator>
  );
};

const RestaurantScreenStack = () => {
  return (
    <RestaurantStack.Navigator initialRouteName="Restaurants">
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantScreen}
        // options={({route}) => ({title: route.params.name})}
      />
    </RestaurantStack.Navigator>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="UserStack" component={UserScreenStack} />
          <RootStack.Screen
            name="RestaurantStack"
            component={RestaurantScreenStack}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
