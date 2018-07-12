import React from 'react';
import {
  Text,
} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Home from './screens/containers/Home';
import Movie from './screens/containers/Movie';
import Category from './screens/containers/Category';
import Header from './sections/components/Header';
import About from './screens/containers/About';
import Profile from './screens/containers/Profile';
import Lucky from './screens/containers/Lucky';

const Main = createStackNavigator(
  {
    Home,
    Movie,
    Category,
  },
  {
    navigationOptions: {
      header: Header,
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: <Text>{'🏠'}</Text>
      },
    },
    About: {
      screen: About,
    },
    Lucky: {
      screen: Lucky,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#65A721',
    }
  },
)

export default TabNavigator;
