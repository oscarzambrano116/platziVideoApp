import { createStackNavigator } from 'react-navigation';
import Loading from './sections/components/Loading';

const Main = createStackNavigator(
  {
    Home: Loading,
  },
);

export default Main;
