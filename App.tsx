import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {Application} from '~/components/Application/index';

const App = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);

export default App;
