import { createStackNavigator } from 'react-navigation';
import Home from './screens/containers/Home';
import Movie from './screens/containers/Movie';

const Main = createStackNavigator(
  {
    Home,
    Movie,
  },
);

export default Main;
