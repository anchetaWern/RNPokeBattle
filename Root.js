import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import LoginScreen from "./src/screens/LoginScreen";
import BattleScreen from "./src/screens/BattleScreen";
import TeamSelectionScreen from "./src/screens/TeamSelectionScreen";

import Reactotron from "reactotron-react-native";

// todo: import Redux packages
// todo: import reducers

Reactotron.configure({ host: "YOUR_INTERNAL_IP_ADDRESS" }) // 192.168.254.108
  .useReactNative()
  .connect(); // todo: add

console.ignoredYellowBox = ["Setting a timer"];

// todo: create global app store

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    TeamSelect: TeamSelectionScreen,
    Battle: BattleScreen
  },
  {
    initialRouteName: "Login"
  }
);

class Router extends Component {
  render() {
    // todo: wrap in Provider component and pass store as prop
    return <RootStack />;
  }
}

export default Router;
