import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppDrawerNavigator from '@navigation/AppDrawerNavigator';
import {AuthStackNavigator} from '@navigation/AppStackNavigator';

import {Session} from '@supabase/supabase-js';
import {supabase} from '@helpers/supabase-service';

const RootNavigation = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    //set local auth variable with supabase session
    setSession(supabase.auth.session());

    //supabase auth listens for state changes to see if logged in or not
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NavigationContainer>
      {session ? <AppDrawerNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigation;
