import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import CustomText from "../CustomText";

import { Entypo } from "@expo/vector-icons";

// todo: import Redux packages

// todo: import actions

const PokemonOption = ({ pokemon_data, is_selected, action_type }) => {
  let compact = action_type == "select-pokemon" ? false : true;
  let marginTop = compact ? {} : { marginTop: 20 };
  let imageStyle = compact ? { width: 40 } : { width: 60 };

  const { label, sprite } = pokemon_data; // todo: extract id

  return (
    <TouchableOpacity
      onPress={() => {
        if (action_type == "select-pokemon") {
          // todo: dispatch action for adding clicked Pokemon to the team
        } else if (action_type == "switch-pokemon") {
          // todo: dispatch action for setting message for message box
          // todo: dispatch action for setting current Pokemon
        }
      }}
    >
      <View style={[styles.container, marginTop]}>
        <Image source={sprite} resizeMode={"contain"} style={imageStyle} />
        <CustomText styles={[styles.text]}>{label}</CustomText>
        <Entypo
          name="check"
          size={18}
          color={is_selected ? "#40c057" : "#FFF"}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    alignItems: "flex-end",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  text: {
    width: 100
  }
};

// todo: add mapDispatchToProps (backToMove, togglePokemon, setPokemon, setMessage, setMove)

export default PokemonOption; // todo: convert component into a connected component
