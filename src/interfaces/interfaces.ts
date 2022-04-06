import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';

export interface category {
  name: string;
}

export type AuthStackParams = {
  Login: undefined;
  SignUp: undefined;
};

export type RestaurantStackParams = {
  User: undefined;
  Restaurants: {
    id: number;
    name: string;
  };
};

export type UserStackParams = {
  User: undefined;
  Restaurants: {
    id: number;
    name: string;
  };
};

export type HomeStackParams = {
  Home: undefined;
  User: undefined;
  Restaurants: {
    id: number;
    name: string;
  };
};

export type BrowseStackParams = {
  Home: undefined;
  Browse: undefined;
  User: undefined;
  Restaurants: {
    id: number;
    name: string;
  };
};

export type CartStackParams = {
  Home: undefined;
  Browse: undefined;
  Cart: undefined;
  User: undefined;
  Restaurants: {
    id: number;
    name: string;
  };
};

export type RootStackParams = {
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  BrowseStack: BrowseStackParams;
  CartStack: CartStackParams;
  UserStack: UserStackParams;
  RestaurantStack: NavigatorScreenParams<RestaurantStackParams>;
  Restaurants: {
    id: number;
    name: string;
  };
};
