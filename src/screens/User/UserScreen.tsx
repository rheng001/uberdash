import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RootStackParams} from '@interfaces/interfaces';

import {setAuthenticated, authSelector} from '@redux/slices/authSlice';
import {useAppDispatch, useAppSelector} from '@redux/hooks';

type Props = NativeStackScreenProps<RootStackParams, 'UserStack'>;

import {supabase} from '@helpers/supabase-service';

const UserScreen = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const id = supabase.auth.user()?.id;

    (async () => {
      let {data: user, error} = await supabase
        .from('user')
        .select('*')
        .eq('id', id);
      !error && setUserInfo(user[0]);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(setAuthenticated(false));
        }}>
        <Text style={{color: 'red'}}>{JSON.stringify(userInfo, null, 2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default UserScreen;
