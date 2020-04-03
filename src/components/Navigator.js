import {StackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Navigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        title: 'Details',
      },
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default Navigator;
