import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/login';
import Events from './src/screens/events';
import DetailEvents from './src/screens/detail-event';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Events: {screen: Events},
  DetailEvents: {screen: DetailEvents},
}, {headerMode: 'none'});

const App = createAppContainer(MainNavigator);

export default App;