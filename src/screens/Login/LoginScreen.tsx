import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from 'interfaces/interfaces';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  return (
    <View>
      <Text>Login</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
