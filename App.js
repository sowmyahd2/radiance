import React from 'react';
import { Provider } from 'react-redux';
import store from './screens/redux/Store'; // Import your Redux store

import RootNavigator from './screens/navigation/Rootnavigator';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
