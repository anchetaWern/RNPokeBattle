import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import CustomText from "../CustomText";

import { Entypo } from "@expo/vector-icons";

import { connect } from "react-redux";

import { selectPokemon, setPokemon, setMove, setMessage } from "../../actions";

const PokemonOption = ({
  pokemon_data,
  is_selected,
  action_type,
  togglePokemon,
  setPokemon,
  setMessage,
  setMove,
  backToMove,
  opponents_channel
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
          setMessage(`You used ${pokemon_data.label}`);
          setPokemon(pokemon_data);

          opponents_channel.trigger("client-switched-pokemon", {
            team_member_id: pokemon_data.team_member_id
          });

          setTimeout(() => {
            setMessage("Please wait for your turn...");
            setMove("wait-for-turn");
          }, 2000);
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
    },

    setMessage: message => {
      dispatch(setMessage(message));
    },
    setMove: move => {
      dispatch(setMove(move));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PokemonOption);
