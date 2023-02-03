import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import SearchResults from "../screens/SearchResults";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Google",
    },
  },
  SearchResults: {
    screen: SearchResults,
    navigationOptions: {
      title: "Search Results",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
  },
});
export default createAppContainer(HomeStack);
