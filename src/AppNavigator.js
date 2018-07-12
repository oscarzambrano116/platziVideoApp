import { createStackNavigator } from 'react-navigation';
import Home from './screens/containers/Home';
import Movie from './screens/containers/Movie';
import Category from './screens/containers/Category';
import Header from './sections/components/Header';

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

export default Main;
