import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/login';
import Events from './src/screens/events';
import DetailEvents from './src/screens/detail-event';

const MainNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
        header: null,
    }    
  },
  Events: {
    screen: Events,
    navigationOptions: {
      title: 'Eventos',
      headerLeft: null,
      headerTitleStyle: {
        fontWeight: '300',
      }
    }
  },
  DetailEvents: {
    screen: DetailEvents,
    navigationOptions: {
      title: 'Detalhes do evento',
      headerTitleStyle: {
        fontWeight: '300',
      }
    }    
  },
});

const App = createAppContainer(MainNavigator);

export default App;