import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";

import CustomText from "../components/CustomText";
import PokemonFullSprite from "../components/PokemonFullSprite";
import HealthBar from "../components/HealthBar";
import ActionList from "../components/ActionList";
import MovesList from "../components/MovesList";
import PokemonList from "../components/PokemonList";

import { connect } from "react-redux";

import { Ionicons } from "@expo/vector-icons";

import pokemon_data from "../data/pokemon_data.js";
import moves_data from "../data/moves_data";

import uniqid from "../helpers/uniqid";
import randomInt from "../helpers/randomInt";
import shuffleArray from "../helpers/shuffleArray";

import { setOpponentTeam, setOpponentPokemon, setMove } from "../actions";

class BattleScreen extends Component {
  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    const { setOpponentTeam, setOpponentPokemon } = this.props;

    let random_pokemon_ids = [];
    for (let x = 0; x <= 5; x++) {
      random_pokemon_ids.push(randomInt(1, 54));
    }

    let opposing_team = pokemon_data.filter(item => {
      return random_pokemon_ids.indexOf(item.id) !== -1;
    });

    opposing_team = opposing_team.map(item => {
      let hp = 500;

      let shuffled_moves = shuffleArray(item.moves);
      let selected_moves = shuffled_moves.slice(0, 4);

      let moves = moves_data.filter(item => {
        return selected_moves.indexOf(item.id) !== -1;
      });

      let member_id = uniqid();

      return {
        ...item,
        team_member_id: member_id,
        current_hp: hp,
        total_hp: hp,
        moves: moves,
        is_selected: false
      };
    });

    setOpponentTeam(opposing_team);
    setOpponentPokemon(opposing_team[0]);

    // todo: get reference to Pusher connection from navigation param

    /*
    todo:
    - get opponent's Pokemon IDs and team member IDs from navigation param
    - construct the opponent team array based on the Pokemon IDs
    - sort the opponent team array based on the ordering of the team member IDs from the navigation param
    - add the team member ID to each Pokemon
    - dispatch action for setting the opponent Pokemon team and setting the current opponent Pokemon
    */

    /*
    todo:
    - determine if it's the user's turn, if not then dispatch an action to set them to wait for their turn
    */

    /*
    todo:

    - listen for event for when the opponent switched Pokemon
    - find the Pokemon from the opponent team array
    - dispatch action that will set the opponent Pokemon
    - dispatch action that will allow the current user to make a move
    */

    /*
    todo:

    - listen for event when the opponent Pokemon attacked the current user's Pokemon
    - dispatch action that will update the current Pokemon's health
    - if current Pokemon's health goes below 1, remove current Pokemon from team
    - emit event that will let the opponent know that their opponent's Pokemon has fainted
    - dispatch action that will allow the current user to pick a Pokemon to switch to
    */

    /*
    todo:

    - listen for event for when the opponent's Pokemon fainted
    - dispatch event that will remove the opponent's current Pokemon from the opposing team
    */
  }

  render() {
    const {
      team,
      move,
      move_display_text,
      pokemon,
      opponent_pokemon,
      backToMove
    } = this.props;

    return (
      <View style={styles.container}>
        <CustomText styles={[styles.headerText]}>Fight!</CustomText>

        <View style={styles.battleGround}>
          {opponent_pokemon && (
            <View style={styles.opponent}>
              <HealthBar
                currentHealth={opponent_pokemon.current_hp}
                totalHealth={opponent_pokemon.total_hp}
                label={opponent_pokemon.label}
              />
              <PokemonFullSprite
                pokemon={opponent_pokemon.label}
                spriteFront={opponent_pokemon.front}
                spriteBack={opponent_pokemon.back}
                orientation={"front"}
              />
            </View>
          )}

          {pokemon && (
            <View style={styles.currentPlayer}>
              <HealthBar
                currentHealth={pokemon.current_hp}
                totalHealth={pokemon.total_hp}
                label={pokemon.label}
              />

              <PokemonFullSprite
                pokemon={pokemon.label}
                spriteFront={pokemon.front}
                spriteBack={pokemon.back}
                orientation={"back"}
              />
            </View>
          )}
        </View>

        <View style={styles.controls}>
          <View style={styles.controlsHeader}>
            {(move == "select-pokemon" || move == "select-pokemon-move") && (
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  backToMove();
                }}
              >
                <Ionicons name="md-arrow-round-back" size={20} color="#333" />
              </TouchableOpacity>
            )}

            <CustomText styles={styles.controlsHeaderText}>
              {move_display_text}
            </CustomText>
          </View>

          {move == "select-move" && <ActionList />}

          {move == "select-pokemon" && (
            <PokemonList
              data={team}
              scrollEnabled={false}
              numColumns={2}
              action_type={"switch-pokemon"}
            />
          )}

          {pokemon &&
            move == "select-pokemon-move" && (
              <MovesList moves={pokemon.moves} />
            )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ battle }) => {
  const {
    team,
    move,
    move_display_text,
    pokemon,
    opponent_team,
    opponent_pokemon
  } = battle;
  return {
    team,
    move,
    move_display_text,
    pokemon,
    opponent_team,
    opponent_pokemon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    backToMove: () => {
      dispatch(setMove("select-move"));
    },
    setOpponentTeam: team => {
      dispatch(setOpponentTeam(team));
    },
    setOpponentPokemon: pokemon => {
      dispatch(setOpponentPokemon(pokemon));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleScreen);

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff"
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
