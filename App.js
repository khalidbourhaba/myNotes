import React from 'react';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';
// Amplify imports and config
import Amplify from '@aws-amplify/core'
import config from './aws-exports'

Amplify.configure(config)

const Main = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Main;
