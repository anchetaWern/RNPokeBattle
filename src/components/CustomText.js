import React, { Component } from "react";
import { Text } from "react-native";

import { Font } from "expo";

class CustomText extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Aldrich: require("../assets/fonts/Aldrich/Aldrich-Regular.ttf")
    });

    this.setState({
      fontLoaded: true
    });
  }

  render() {
    const { children, styles } = this.props;
    if (this.state.fontLoaded) {
      return <Text style={[font.text, styles]}>{children}</Text>;
    }

    return <Text style={styles}>{children}</Text>;
  }
}

const font = {
  text: {
    fontFamily: "Aldrich"
  }
};

export default CustomText;
