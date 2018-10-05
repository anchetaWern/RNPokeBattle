import React from "react";
import { Image } from "react-native";

const PokemonFullSprite = ({ spriteFront, spriteBack, orientation }) => {
  let sprite = orientation == "front" ? spriteFront : spriteBack;
  return <Image source={sprite} resizeMode={"contain"} style={styles.image} />;
};

const styles = {
  container: {
    paddingBottom: 20
  },
  image: {
    width: 150
  }
};

export default PokemonFullSprite;
