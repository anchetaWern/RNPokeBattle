import React from "react";
import { FlatList } from "react-native";

import PokemonOption from "../PokemonOption";

const PokemonList = ({
  data,
  numColumns,
  scrollEnabled,
  action_type
  // todo: extract opponents channel and pass it as props to PokemonOption
}) => {
  return (
    <FlatList
      data={data}
      numColumns={numColumns}
      scrollEnabled={scrollEnabled}
      contentContainerStyle={styles.contentContainerStyle}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({ item }) => (
        <PokemonOption
          pokemon_data={item}
          is_selected={item.is_selected}
          action_type={action_type}
        />
      )}
    />
  );
};

const styles = {
  contentContainerStyle: {
    alignItems: "stretch",
    backgroundColor: "#fff"
  }
};

export default PokemonList;
