import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RoutesScreen from '../screens/RoutesScreen';
import MapScreen from '../screens/MapScreen';
import AddPoolsScreen from '../screens/AddPoolsScreen';
import SignInScreen from '../screens/SignInScreen';

const SignInStack = createStackNavigator({
    SignIn: SignInScreen,
});

SignInStack.navigationOptions = {
    tabBarLabel: 'SignIn',
    pools: 'RoutesScreen'
};

const MapStack = createStackNavigator({
    Maps: MapScreen,
});

MapStack.navigationOptions = {
    tabBarLabel: 'Maps',

    tabBarIcon: ({ focused, tintColor }) => (
        <TabBarIcon
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
            color={tintColor}
        />
    ),
    tabBarOptions: {style: {backgroundColor: '#00609c'},
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#f8ffa5'},
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  SignIn: SignInScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Driver Diver',
    tabBarOptions: {style: {backgroundColor: '#00609c'},
    showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#f8ffa5'},

};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',

    tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      color={tintColor}
    />
  ),
    tabBarOptions: {style: {backgroundColor: '#00609c'},
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#f8ffa5'},
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Slack',
    tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'}
      color={tintColor}
    />
  ),
    tabBarOptions: {style: {backgroundColor: '#00609c'},
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#f8ffa5'},
};


const RoutesStack = createStackNavigator({
  Routes: RoutesScreen,
  Maps: MapScreen,
});

RoutesStack.navigationOptions = {
  tabBarLabel: 'Pools',
    tabBarOptions: {style: {backgroundColor: '#00609c'},
        tintColor: '#f8ffa5',
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#f8ffa5'},
    tabBarIcon: ({ focused, tintColor }) => (
      <TabBarIcon
          name={Platform.OS === 'ios' ? 'ios-car' : 'md-car'}
          color={tintColor}
      />
  ),

};

const AddPoolStack = createStackNavigator({
    AddPools: AddPoolsScreen,
});

AddPoolStack.navigationOptions = {
    tabBarLabel: 'Pools',
    tabBarOptions: {style: {backgroundColor: '#00609c'},
        tintColor: '#f8ffa5',
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#f8ffa5'},
    tabBarIcon: ({ focused, tintColor }) => (
        <TabBarIcon
            name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
            color={tintColor}
        />
    ),

};

export default createBottomTabNavigator({
    Home: { screen: HomeStack, navigationOptions:{tabBarVisible: false} },
  RoutesStack,
  AddPoolStack,
  SettingsStack,
});
