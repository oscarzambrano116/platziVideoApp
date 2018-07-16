import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from '../src/AppNavigator';

const navigationReducer = createNavigationReducer(AppNavigator);

export default navigationReducer;
