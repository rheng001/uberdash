import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from '@interfaces/interfaces';
import {SvgUri} from 'react-native-svg';
import LoginForm from '@components/LoginForm';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  const UBEREATS_LOGO = 'https://cdn.worldvectorlogo.com/logos/uber-eats.svg';

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <SvgUri
          // style={styles.image}
          uri={UBEREATS_LOGO}
          width="50%"
          height="50%"
        />
      </View>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: 'center',
  },
});

export default LoginScreen;
