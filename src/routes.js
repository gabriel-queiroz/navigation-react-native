import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Login from '~/pages/Login';

const Routes = createAppContainer(createStackNavigator({ Login, Main }, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#458FD3',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}));

export default Routes;
