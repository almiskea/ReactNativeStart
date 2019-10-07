import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen.js'
import ImageScreen from './src/screens/ImageScreen.js'
import CounterScreen from './src/screens/CounterScreen.js'
import ColorScreen from './src/screens/ColorScreen.js'
import SquareScreen from './src/screens/SquareScreen.js'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorScreen,
    Square: SquareScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
