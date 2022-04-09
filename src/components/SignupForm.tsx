import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from '@interfaces/interfaces';

interface SignupFormProps {}

const validEmail = (value: any) =>
  /^(?=.{1,64}@)(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f]| )*")@(?=.{1,255}$)(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(
    value,
  );

const schema = yup
  .object({
    email_address: yup
      .string()
      .email('Not a valid email')
      .required('Email is required*')
      .test('Enter a valid email', 'Enter a valid email', validEmail),
    username: yup
      .string()
      .required()
      .min(2, 'A username is required to have at least 2 characters'),
    password: yup
      .string()
      .required()
      .min(6, 'Your password has to have at least 6 characters'),
  })
  .required();

const defaultValues = {
  email_address: '',
  username: '',
  password: '',
};

const SignupForm: React.FC<SignupFormProps> = ({}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  const {
    control,
    handleSubmit,
    formState: {errors, isDirty, isValid},
  } = useForm({
    defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <Controller
          name="email_address"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholderTextColor={'#444'}
              placeholder="Phone number, username, or email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email_address && (
          <Text style={styles.errorText}>{errors.email_address.message}</Text>
        )}
      </View>
      <View style={styles.inputField}>
        <Controller
          name="username"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholderTextColor={'#444'}
              placeholder="Username"
              autoCapitalize="none"
              textContentType="name"
              autoFocus={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email_address && (
          <Text style={styles.errorText}>{errors.email_address.message}</Text>
        )}
      </View>
      <View style={styles.inputField}>
        <Controller
          name="password"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholderTextColor={'#444'}
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
      </View>

      <Pressable
        style={[
          styles.buttonStyle,
          //   isValid ? {backgroundColor: '#0096F6'} : {backgroundColor: '#9ACAF7'},
        ]}
        onPress={handleSubmit(onSubmit)}
        // disabled={!isValid || !isDirty}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <View style={styles.signupContainer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#0096F6'}}> Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    // padding: 6,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
  },
  buttonStyle: {
    backgroundColor: '#0096F6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50,
  },
  errorText: {
    color: 'red',
  },
});

export default SignupForm;
