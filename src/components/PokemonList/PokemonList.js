import React from "react";
import { FlatList } from "react-native";
import CustomText from "../CustomText";

import PokemonOption from "../PokemonOption";

const PokemonList = ({
  data,
  numColumns,
  scrollEnabled,
  action_type,
  opponents_channel
}) => {
  return (
    <FlatList
      data={data}
      numColumns={numColumns}
      scrollEnabled={scrollEnabled}
      contentContainerStyle={{ alignItems: "stretch", backgroundColor: "#fff" }}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({ item }) => (
        <PokemonOption
          pokemon_data={item}
          is_selected={item.is_selected}
          action_type={action_type}
          opponents_channel={opponents_channel}
        />
      )}
    />
  );
};

export default PokemonList;
