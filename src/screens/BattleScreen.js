import React, { Component } from "react";
import { View, TouchableOpacity, Alert } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import CustomText from "../components/CustomText";
import PokemonFullSprite from "../components/PokemonFullSprite";
import HealthBar from "../components/HealthBar";
import ActionList from "../components/ActionList";
import MovesList from "../components/MovesList";
import PokemonList from "../components/PokemonList";

// todo: import Pokemon and moves data

// todo: import helper functions

// todo: import actions

class BattleScreen extends Component {
  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    /*
    todo:
    - extract navigation props
    - extract props passed from mapStateToProps
    - extract functions added via mapDispatchToProps

    - construct random opponent team data
    - dispatch action to set opponent team
    - dispatch action to set current opponent Pokemon
    */
  }

  render() {
    /*
    todo:
    - extract props passed using mapStateToProps, as well as navigation props
    - render opponent's current Pokemon
    - render current user's Pokemon
    - selectively render currently displayed message (e.g. Pikachu used Thunder! It's super effective.)
    - selectively render action buttons (fight or switch Pokemon)
    - selectively render Pokemon list
    - selectively render Pokemon moves list
    */

    return (
      <View style={styles.container}>
        <CustomText>Battle Screen</CustomText>
      </View>
    );
  }
}

/*
todo: add mapStateToProps
  - team
  - move
  - move_display_text
  - message
  - pokemon
  - opponent_team
  - opponent_pokemon
*/

/*
todo: add mapDispatchToProps

  - backToMove
  - setOpponentTeam
  - setOpponentPokemon
  - setMessage
  - setPokemonHealth
  - setMove
  - removePokemonFromTeam
  - removePokemonFromOpposingTeam
*/

export default BattleScreen; // todo: turn component into a connected component

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // todo: remove on part 1
    alignItems: "center",
    justifyContent: "center"
    // end remove
  },
  headerText: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
    alignSelf: "center"
  },
  battleGround: {
    flex: 8,
    padding: 12,
    flexDirection: "column"
  },
  currentPlayer: {
    alignSelf: "flex-start",
    alignItems: "center"
  },
  opponent: {
    alignSelf: "flex-end",
    alignItems: "center"
  },
  controls: {
    flex: 3,
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#404040"
  },
  controlsHeader: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 10
  },
  backButton: {
    paddingLeft: 5,
    paddingRight: 5
  },
  controlsHeaderText: {
    paddingTop: 5
  },
  message: {
    fontSize: 15
  }
};
