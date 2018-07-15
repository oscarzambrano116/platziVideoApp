import React from 'react';
import {
  Text,
} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import Home from './screens/containers/Home';
import Movie from './screens/containers/Movie';
import Category from './screens/containers/Category';
import Header from './sections/components/Header';
import About from './screens/containers/About';
import Profile from './screens/containers/Profile';
import Lucky from './screens/containers/Lucky';
import Login from './screens/containers/Login';
import Loading from './screens/containers/Loading';
import Drawer from './sections/components/Drawer';

const Main = createStackNavigator(
  {
    Home,
    Movie,
  },
  {
    navigationOptions: {
      header: Header,
      gesturesEnabled: true,
    },
    mode: 'modal',
    cardStyle: {
      backgroundColor: 'white',
    },
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
    Profile: {
      screen: Profile,
    },
    Lucky: {
      screen: Lucky,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#65A721',
    }
  },
);

const withModal = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    Category,
  },
  {
    mode: 'card',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white',
    },
    navigationOptions: {
      gesturesEnabled: true,
    },
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: withModal,
      navigationOptions: {
        title: 'Inicio',
        drawerIcon: <Text>{'🏠'}</Text>,
      }
    },
    Sobre: {
      screen: About,
    },
    Suerte: {
      screen: Lucky,
    },
  },
  {
    drawerWidth: 200,
    drawerBackgroundColor: '#F6F6F6',
    contentComponent: Drawer,
    contentOptions: {
      activeBackgroundColor: '#7ABA2F',
      activeTintColor: 'white',
      ianctiveTintColor: '#828282',
      inactiveBackgroundColor: 'white',
      itemStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0, 0, 0, 0.5)',
      },
      labelStyle: {
        marginHorizontal: 0,
      },
      iconContainerStyle: {
        marginHorizontal: 5,
      },
    },
  },
);

const SwitchNavigator = createSwitchNavigator(
  {
    App: DrawerNavigator,
    Login,
    Loading,
  },
  {
    initialRouteName: 'Loading',
  },
);

export default SwitchNavigator;
