import React from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import AppBottomTabNavigator from '@navigation/AppBottomTabNavigator';
import {
  BrowseStackNavigator,
  CartStackNavigator,
  UserStackNavigator,
} from '@navigation/AppStackNavigator';
import {supabase} from '@helpers/supabase-service';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Text>{supabase.auth.user()?.email}</Text>
        </View>
        <View style={{flex: 1}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <Button
          title="LOGOUT"
          onPress={async () => {
            await supabase.auth.signOut();
            props.navigation.closeDrawer();
            //do logout code here
          }}
        />
      </View>
    </>
  );
};

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={AppBottomTabNavigator} />
      <Drawer.Screen name="Browse" component={BrowseStackNavigator} />
      <Drawer.Screen name="Cart" component={CartStackNavigator} />
      <Drawer.Screen name="User" component={UserStackNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  'modal-container': {
    flex: 1,
    alignItems: 'center',
    borderRadius: 18,
  },
  drawerHeader: {
    height: 100,
    backgroundColor: '#F1F1F1',
    margin: 10,
    marginTop: 0,
    marginBottom: 8,
    borderRadius: 8,
  },
  buttonContainer: {
    marginBottom: 30,
  },
});

export default AppDrawerNavigator;
