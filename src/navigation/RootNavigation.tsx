import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppDrawerNavigator from '@navigation/AppDrawerNavigator';
import {AuthStackNavigator} from '@navigation/AppStackNavigator';

import {supabase} from '@helpers/supabase-service';

const RootNavigation = () => {
  const [auth, setAuth] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //set local auth variable with supabase session
    setAuth(supabase.auth.session());

    //supabase auth listens for state changes to see if logged in or not
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session);
      setAuth(session);
    });
  }, []);

  return (
    <NavigationContainer>
      {auth ? <AppDrawerNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigation;
