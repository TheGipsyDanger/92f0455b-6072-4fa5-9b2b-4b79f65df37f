import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import Routes from './src/routes/Routes';

const App: React.FC = () => (
  <NavigationContainer>
    <Provider store={store}>
      <Routes />
    </Provider>
  </NavigationContainer>
);

export default App;
