import React from "react";
import { TouchableOpacity, FlatList } from "react-native";
import CustomText from "../CustomText";

// todo: import Redux packages
// todo: import actions
// todo: import helper functions

const MovesList = ({
  moves
  // access props that were set using mapStateToProps
}) => {
  return (
    <FlatList
      data={moves}
      numColumns={2}
      scrollEnabled={false}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            /*
            todo:
            - dispatch action for setting message to display in the message box
            - dispatch action for updating the health of the opponent's current Pokemon
            - if opponent Pokemon's health goes below 1, dispatch action for removing opponent's current Pokemon from their team
            */
          }}
        >
          <CustomText styles={styles.label}>{item.title}</CustomText>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = {
  container: {
    width: 130,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#ffd43b",
    marginBottom: 10
  },
  label: {
    fontSize: 14
  }
};

// todo: add mapStateToProps (opponent_team, pokemon, opponent_pokemon)

/*
todo: add mapDispatchToProps:
  - setOpponentPokemonHealth
  - removePokemonFromOpponentTeam
  - setOpponentPokemon
  - setMessage
  - setMove
*/

export default MovesList; // todo: convert the component into a connected component
