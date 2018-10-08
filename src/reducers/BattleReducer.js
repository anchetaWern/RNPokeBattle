import {
  SET_TEAM,
  SET_OPPONENT_TEAM,
  SET_MOVE,
  SET_POKEMON,
  SET_OPPONENT_POKEMON,
  SET_POKEMON_HEALTH,
  SET_OPPONENT_POKEMON_HEALTH,
  SET_MESSAGE,
  REMOVE_POKEMON_FROM_TEAM,
  REMOVE_POKEMON_FROM_OPPONENT_TEAM
} from "../actions/types";

const move_display_text = {
  "wait-for-turn": "",
  "select-move": "Select your move",
  "select-pokemon": "Which Pokemon will you use?",
  "select-pokemon-move": "Which attack will you use?"
};

const default_move = "select-move";

const INITIAL_STATE = {
  move: default_move,
  move_display_text: move_display_text[default_move],
  pokemon: null, // currently selected pokemon by user
  opponent_pokemon: null, // currently selected pokemon by opponent
  team: [],
  opponent_team: [],
  message: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TEAM:
      const { team } = action;
      return { ...state, team };

    case SET_OPPONENT_TEAM:
      return { ...state, opponent_team: action.team };

    case SET_MOVE:
      const { move } = action;
      return { ...state, move, move_display_text: move_display_text[move] };

    case SET_POKEMON:
      const pokemon = action.pokemon;
      return { ...state, pokemon };

    case SET_OPPONENT_POKEMON:
      const opponent_pokemon = action.pokemon
        ? action.pokemon
        : state.opponent_team[0];
      return { ...state, opponent_pokemon };

    case SET_POKEMON_HEALTH:
      let team_data = [...state.team];
      team_data = team_data.map(item => {
        if (item.team_member_id == action.team_member_id) {
          item.current_hp = action.health;
        }
        return item;
      });

      return { ...state, team: team_data };

    case SET_OPPONENT_POKEMON_HEALTH:
      let opponent_team = [...state.opponent_team];
      opponent_team = opponent_team.map(item => {
        if (item.team_member_id == action.team_member_id) {
          item.current_hp = action.health;
        }
        return item;
      });

      return { ...state, opponent_team };

    case SET_MESSAGE:
      return { ...state, move: "wait-for-turn", message: action.message };

    case REMOVE_POKEMON_FROM_TEAM:
      const diminished_team = [...state.team].filter(item => {
        return item.team_member_id != action.team_member_id;
      });

      return { ...state, team: diminished_team };

    case REMOVE_POKEMON_FROM_OPPONENT_TEAM:
      const diminished_opponent_team = [...state.opponent_team].filter(item => {
        return item.team_member_id != action.team_member_id;
      });

      return { ...state, opponent_team: diminished_opponent_team };

    default:
      return state;
  }
};
