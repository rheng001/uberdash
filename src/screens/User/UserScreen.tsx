import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RootStackParams} from '@interfaces/interfaces';

import {setAuthenticated, authSelector} from '@redux/slices/authSlice';
import {useAppDispatch, useAppSelector} from '@redux/hooks';

import * as RootNavigation from '@navigation/RootNavigation2';

type Props = NativeStackScreenProps<RootStackParams, 'UserStack'>;

const UserScreen = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(setAuthenticated(false));
        }}>
        <Text style={{color: 'red'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserScreen;
