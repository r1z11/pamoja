import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home';
import Accounts from '../screens/Accounts';
import Transactions from '../screens/Transactions';
import More from '../screens/More';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// Home
const HomeStack = createStackNavigator(
  {
    Home: Home,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-wallet' : 'md-wallet'}
    />
  ),
};

HomeStack.path = '';

// Accounts
const AccountsStack = createStackNavigator(
  {
    Acccounts: Accounts,
  },
  config
);

AccountsStack.navigationOptions = {
  tabBarLabel: 'Accounts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-card' : 'md-card'} />
  ),
};

AccountsStack.path = '';

// Transactions
const TransactionsStack = createStackNavigator(
  {
    Transactions: Transactions,
  },
  config
);

TransactionsStack.navigationOptions = {
  tabBarLabel: 'Transactions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'} />
  ),
};

TransactionsStack.path = '';

// More
const MoreStack = createStackNavigator(
  {
    More: More,
  },
  config
);

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'} />
  ),
};

MoreStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AccountsStack,
  TransactionsStack,
  MoreStack,
});

tabNavigator.path = '';

export default tabNavigator;
