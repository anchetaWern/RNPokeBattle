import React, { Component } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import CustomText from "../CustomText";

import { connect } from "react-redux";
import {
  setMove,
  setOpponentPokemonHealth,
  removePokemonFromOpponentTeam,
  setOpponentPokemon,
  setMessage
} from "../../actions";

import getMoveEffectivenessAndDamage from "../../helpers/getMoveEffectivenessAndDamage";

import { Audio } from "expo";

class MovesList extends Component {
  render() {
    const { moves } = this.props;

    return (
      <FlatList
        data={moves}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={this.selectMove.bind(this, item)}
          >
            <CustomText styles={styles.label}>{item.title}</CustomText>
          </TouchableOpacity>
        )}
      />
    );
  }

  selectMove = async item => {
    const {
      moves,
      opponent_pokemon,
      setOpponentPokemonHealth,

      backToMove,
      pokemon,
      setMessage,
      setMove,
      removePokemonFromOpponentTeam,
      setOpponentPokemon,
      opponents_channel
    } = this.props;

    let { effectiveness, damage } = getMoveEffectivenessAndDamage(
      item,
      opponent_pokemon
    );
    let health = opponent_pokemon.current_hp - damage;

    let message = `${pokemon.label} used ${item.title}! ${effectiveness}`;

    setMessage(message);

    opponents_channel.trigger("client-pokemon-attacked", {
      team_member_id: opponent_pokemon.team_member_id,
      message: message,
      health: health
    });

    setOpponentPokemonHealth(opponent_pokemon.team_member_id, health);

    if (health < 1) {
      setOpponentPokemonHealth(opponent_pokemon.team_member_id, 0);
      removePokemonFromOpponentTeam(opponent_pokemon.team_member_id);

      try {
        let crySound = new Audio.Sound();
        await crySound.loadAsync(opponent_pokemon.cry);
        await crySound.playAsync();
      } catch (error) {
        console.log("error loading cry: ", error);
      }
    }

    setTimeout(() => {
      setMessage("Please wait for your turn...");
      setMove("wait-for-turn");
    }, 1500);
  };
}

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
  const { opponent_pokemon, pokemon } = battle;

  return {
    opponent_pokemon,
    pokemon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    backToMove: () => {
      dispatch(setMove("select-move"));
    },
    setOpponentPokemonHealth: (team_member_id, health) => {
      dispatch(setOpponentPokemonHealth(team_member_id, health));
    },
    removePokemonFromOpponentTeam: team_member_id => {
      dispatch(removePokemonFromOpponentTeam(team_member_id));
    },
    setOpponentPokemon: () => {
      dispatch(setOpponentPokemon());
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
  mapStateToProps,
  mapDispatchToProps
)(MovesList);
