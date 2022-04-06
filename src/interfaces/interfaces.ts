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

export type RootStackParams = {
  Home: undefined;
  UserStack: UserStackParams;
  RestaurantStack: NavigatorScreenParams<RestaurantStackParams>;
  Restaurants: {
    id: number;
    name: string;
  };
};
