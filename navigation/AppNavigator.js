import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import Auth from '../screens/auth/Auth';
import Verify from '../screens/auth/Verify';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: Auth,
    Verify: Verify,
    Main: MainTabNavigator,
  })
);
