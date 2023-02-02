import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Google",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
  },
});
export default createAppContainer(HomeStack);
