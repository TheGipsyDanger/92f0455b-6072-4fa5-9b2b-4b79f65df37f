import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import Routes from './src/routes/Routes';

import {
  useFonts,
  Inter_400Regular,
  Inter_300Light,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

const App = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_300Light,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
