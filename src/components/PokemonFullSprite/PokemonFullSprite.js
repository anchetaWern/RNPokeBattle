import React, { Component } from "react";
import { Image, Animated } from "react-native";

class PokemonFullSprite extends Component {
  constructor(props) {
    super(props);
    this.sprite_translateY = new Animated.Value(0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isAlive !== this.props.isAlive && !this.props.isAlive) {
      Animated.timing(this.sprite_translateY, {
        duration: 900,
        toValue: 1
      }).start();
    } else if (prevProps.isAlive !== this.props.isAlive && this.props.isAlive) {
      this.sprite_translateY.setValue(0);
    }
  }

  render() {
    const { spriteFront, spriteBack, orientation } = this.props;

    let sprite = orientation == "front" ? spriteFront : spriteBack;

    const pokemon_moveY = this.sprite_translateY.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1000]
    });

    return (
      <Animated.Image
        source={sprite}
        resizeMode={"contain"}
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: pokemon_moveY
              }
            ]
          }
        ]}
      />
    );
  }
}

const styles = {
  container: {
    paddingBottom: 20
  },
  image: {
    width: 150
  }
};

export default PokemonFullSprite;
