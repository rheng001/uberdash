import 'react-native-gesture-handler';
import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider as ReduxProvider} from 'react-redux';

import RootNavigation from '@navigation/RootNavigation';
import {store} from '@redux/store';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <RootNavigation />
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default App;
