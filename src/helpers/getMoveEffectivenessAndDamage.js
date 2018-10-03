const effectiveness_chart = {
  "0": "It has no effect.",
  "0.25": "It's not very effective.",
  "0.5": "It's not very effective.",
  "1": "",
  "2": "It's super effective.",
  "4": "It's super effective."
};

const getMoveEffectivenessAndDamage = (move, attacked_pokemon) => {
  let move_type = move.type;
  let effectiveness = attacked_pokemon.type_defenses[move_type];
  let damage = parseInt(move.power * effectiveness);
  return {
    effectiveness: effectiveness_chart[effectiveness],
    damage
  };
};

export default getMoveEffectivenessAndDamage;
