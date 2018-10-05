import React, { Component } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";

import CustomText from "../components/CustomText";
import PokemonList from "../components/PokemonList";
import ActionList from "../components/ActionList";

import { connect } from "react-redux";

import { setTeam, setPokemon } from "../actions";

import uniqid from "../helpers/uniqid";
import shuffleArray from "../helpers/shuffleArray";

import moves_data from "../data/moves_data";

class TeamSelectionScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    is_loading: false
  };

  constructor(props) {
    super(props);
    // todo: initialize Pusher and current user's channel
  }

  render() {
    const { selected_pokemon } = this.props;
    return (
      <View style={styles.container}>
        <CustomText styles={[styles.headerText]}>Select your team</CustomText>

        {selected_pokemon.length == 6 && (
          <View>
            {this.state.is_loading && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ffbf5a" />
                <CustomText styles={styles.messageText}>
                  Waiting for opponent..
                </CustomText>
              </View>
            )}

            {!this.state.is_loading && (
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={this.confirmTeam}
              >
                <CustomText>Confirm Selection</CustomText>
              </TouchableOpacity>
            )}
          </View>
        )}
        <PokemonList
          data={this.props.pokemon}
          numColumns={1}
          action_type={"select-pokemon"}
        />
      </View>
    );
  }

  confirmTeam = () => {
    const { selected_pokemon, setTeam, setPokemon, navigation } = this.props;

    let team = [...selected_pokemon];

    team = team.map(item => {
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

    setTeam(team);
    setPokemon(team[0]);

    this.setState({
      is_loading: true
    });

    // note: this is only temporary, in part 3, this will be updated so that once opponent is found, it will automatically navigate to the Battle screen
    setTimeout(() => {
      const username = navigation.getParam("username");

      this.setState({
        is_loading: false
      });

      navigation.navigate("Battle", {
        username: username
      });
    }, 2500);

    // todo: connect to Pusher

    // todo: subscribe to current user's channel

    // todo: listen for opponent-found event, navigate to Battle screen with the Pusher connection, opponent details, user's channel
  };
}

const mapStateToProps = ({ team_selection }) => {
  const { pokemon, selected_pokemon } = team_selection;
  return {
    pokemon,
    selected_pokemon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTeam: team => {
      dispatch(setTeam(team));
    },
    setPokemon: pokemon => {
      dispatch(setPokemon(pokemon));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamSelectionScreen);

const styles = {
  container: {
    flex: 1
  },
  headerText: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
    alignSelf: "center"
  },
  confirmButton: {
    padding: 10,
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "#95ff84"
  },
  loadingContainer: {
    alignItems: "center"
  },
  messageText: {
    fontSize: 13,
    color: "#676767"
  }
};
