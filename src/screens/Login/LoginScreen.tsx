import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {SvgUri} from 'react-native-svg';
import LoginForm from '@components/LoginForm';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  const UBEREATS_LOGO = 'https://cdn.worldvectorlogo.com/logos/uber-eats.svg';

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <SvgUri
          // style={styles.image}
          uri={UBEREATS_LOGO}
          width="50%"
          height="35%"
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
