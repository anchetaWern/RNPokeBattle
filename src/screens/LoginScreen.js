import React, { Component } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

import CustomText from "../components/CustomText";

import { Audio } from "expo";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: ""
  };

  constructor(props) {
    super(props);
    this.backgroundSound = null;
  }

  async componentDidMount() {
    try {
      this.backgroundSound = new Audio.Sound();
      await this.backgroundSound.loadAsync(
        require("../assets/sounds/background/opening.mp3")
      );
      await this.backgroundSound.setIsLoopingAsync(true);
      await this.backgroundSound.playAsync();
    } catch (error) {
      console.log("error loading background sound: ", error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={require("../assets/images/pokemon/pikachu.gif")} />
          <CustomText styles={styles.headerText}>Pokémon Battles</CustomText>
        </View>

        <View style={styles.main}>
          <CustomText styles={styles.label}>Enter username</CustomText>
          <TextInput
            style={styles.textInput}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
          />

          <TouchableOpacity onPress={this.login} style={styles.button}>
            <CustomText styles={styles.buttonText}>Sign in</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  login = () => {
    let username = this.state.username;

    if (username) {
      this.props.navigation.navigate("TeamSelect", {
        username
      });

      this.backgroundSound.stopAsync();
    }
  };
}

const styles = {
  container: {
    flex: 10,
    padding: 20,
    backgroundColor: "#FFF"
  },
  top: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10
  },
  main: {
    flex: 6,
    justifyContent: "flex-start"
  },
  label: {
    fontSize: 16
  },
  textInput: {
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#eaeaea",
    padding: 5
  },
  button: {
    alignSelf: "center",
    marginTop: 10
  },
  buttonText: {
    fontSize: 18,
    color: "#05a5d1"
  }
};
