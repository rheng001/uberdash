import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
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

import {setAuthenticated, authSelector} from '@redux/slices/authSlice';
import {useAppDispatch, useAppSelector} from '@redux/hooks';

import {supabase} from '@helpers/supabase-service';

interface LoginFormProps {}

const validEmail = (value: any) =>
  /^(?=.{1,64}@)(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f]| )*")@(?=.{1,255}$)(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(
    value,
  );

const schema = yup
  .object({
    email: yup
      .string()
      .email('Not a valid email')
      .required('Email is required*')
      .test('Enter a valid email', 'Enter a valid email', validEmail),
    password: yup
      .string()
      .required()
      .min(6, 'Your password has to have at least 6 characters'),
  })
  .required();

const defaultValues = {
  email: '',
  password: '',
};

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const dispatch = useAppDispatch();
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

  const onSubmit = async (values: any) => {
    console.log(values);
    // dispatch(setAuthenticated(true));
    const response = await supabase.auth.signIn(values);

    if (response?.error) {
      //render error
      Alert.alert('Error Logging in', response?.error?.message);
      return;
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <Controller
          name="email"
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
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
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
      <View style={{alignItems: 'flex-end', marginBottom: 30}}>
        <Text style={{color: '#6BB0F5'}}>Forgot Password</Text>
      </View>

      <Pressable
        style={[
          styles.buttonStyle,
          //   isValid ? {backgroundColor: '#0096F6'} : {backgroundColor: '#9ACAF7'},
        ]}
        onPress={handleSubmit(onSubmit)}
        // disabled={!isValid || !isDirty}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>

      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: '#0096F6'}}> Sign up</Text>
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

export default LoginForm;
