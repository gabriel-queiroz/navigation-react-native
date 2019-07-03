import { createAppContainer, createStackNavigator } from "react-navigation";
import { fromRight } from "react-navigation-transitions";

import Main from "~/pages/Main";
import Login from "~/pages/Login";

const Routes = createAppContainer(
  createStackNavigator(
    { Login, Main },
    {
      transitionConfig: () => fromRight(1000),
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#458FD3"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    }
  )
);

export default Routes;
