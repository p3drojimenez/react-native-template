import { createStackNavigator, 
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

// Views //

import Home from './screens/Home';

const AppStackNavigation = createStackNavigator({
    Home: Home
})

export default createAppContainer(AppStackNavigation);