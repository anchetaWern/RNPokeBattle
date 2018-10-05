import React from "react";
import { TouchableOpacity, FlatList } from "react-native";
import CustomText from "../CustomText";

import { connect } from "react-redux";
import {
  setOpponentPokemonHealth,
  removePokemonFromOpponentTeam,
  setOpponentPokemon,
  setMove
} from "../../actions";

import getMoveEffectivenessAndDamage from "../../helpers/getMoveEffectivenessAndDamage";

const MovesList = ({
  moves,
  opponent_pokemon,
  setOpponentPokemonHealth,
  removePokemonFromOpponentTeam,
  setOpponentPokemon,
  setMove
  // todo: extract opponents channel
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
            let { damage } = getMoveEffectivenessAndDamage(
              item,
              opponent_pokemon
            );
            let health = opponent_pokemon.current_hp - damage;

            // todo: emit event on opponents channel so their UI stays in sync with the current health of their Pokemon

            setOpponentPokemonHealth(opponent_pokemon.team_member_id, health);

            if (health < 1) {
              removePokemonFromOpponentTeam(opponent_pokemon.team_member_id);

              /*
              todo: remove this, since there will already be another player
              on the other side who will switch their Pokemon once it faints
              */

              setMove("select-move");

              setOpponentPokemon();
            }

            // todo: add code for setting move to "wait-for-turn" so the user won't be able to do anything until their opponent has also made their move
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

const mapStateToProps = ({ battle }) => {
  const { opponent_pokemon } = battle;

  return {
    opponent_pokemon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setOpponentPokemonHealth: (team_member_id, health) => {
      dispatch(setOpponentPokemonHealth(team_member_id, health));
    },

    removePokemonFromOpponentTeam: team_member_id => {
      dispatch(removePokemonFromOpponentTeam(team_member_id));
    },

    setOpponentPokemon: () => {
      dispatch(setOpponentPokemon());
    },
    setMove: move => {
      dispatch(setMove(move));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovesList);
