import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {SvgUri} from 'react-native-svg';
import SignupForm from '@components/SignupForm';

interface SignUpScreenProps {}

const SignUpScreen: React.FC<SignUpScreenProps> = ({}) => {
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
      <SignupForm />
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

export default SignUpScreen;
