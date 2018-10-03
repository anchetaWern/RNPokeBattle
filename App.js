import React from "react";
import { View } from "react-native";
import Root from "./Root";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Root />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};
