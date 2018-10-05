import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import CustomText from "../CustomText";

import { Entypo } from "@expo/vector-icons";

import { connect } from "react-redux";

import { selectPokemon, setPokemon, setMove } from "../../actions";

const PokemonOption = ({
  pokemon_data,
  is_selected,
  action_type,
  togglePokemon,
  setPokemon,
  backToMove
  // todo: extract opponents channel from props
}) => {
  let compact = action_type == "select-pokemon" ? false : true;
  let marginTop = compact ? {} : { marginTop: 20 };
  let imageStyle = compact ? { width: 40 } : { width: 60 };

  const { id, label, sprite } = pokemon_data;

  return (
    <TouchableOpacity
      onPress={() => {
        if (action_type == "select-pokemon") {
          togglePokemon(id, pokemon_data, is_selected);
        } else if (action_type == "switch-pokemon") {
          setPokemon(pokemon_data);

          // todo: emit event to inform opponent that they've switched Pokemon

          backToMove();

          // todo: dispatch action for setting user to wait for their turn
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
  label: {
    fontSize: 14
  },
  text: {
    width: 100
  }
};

const mapDispatchToProps = dispatch => {
  return {
    backToMove: () => {
      dispatch(setMove("select-move"));
    },
    togglePokemon: (id, pokemon_data, is_selected) => {
      dispatch(selectPokemon(id, pokemon_data, is_selected));
    },
    setPokemon: pokemon => {
      dispatch(setPokemon(pokemon));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PokemonOption);
