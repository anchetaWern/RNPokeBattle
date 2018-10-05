import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import LoginScreen from "./src/screens/LoginScreen";
import BattleScreen from "./src/screens/BattleScreen";
import TeamSelectionScreen from "./src/screens/TeamSelectionScreen";

import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import reducers from "./src/reducers";

import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

Reactotron.configure({ host: "YOUR_INTERNAL_IP_ADDRESS" }) // example: 192.168.254.108
  .useReactNative()
  .use(reactotronRedux())
  .connect();

const store = Reactotron.createStore(reducers, {}, compose());

//const store = createStore(reducers); // replace the above code with this one on deployment

console.ignoredYellowBox = ["Setting a timer"];

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
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default Router;
