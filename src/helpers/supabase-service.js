import {createClient} from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const supabase = createClient(Config.SUPABASE_URL, Config.SUPABASE_PUBLIC_KEY, {
  localStorage: AsyncStorage,
});

export {supabase};
