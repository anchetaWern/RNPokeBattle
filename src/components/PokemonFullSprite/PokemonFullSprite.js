import React, { Component } from "react";
import { View, Image, Animated, Easing } from "react-native";

class PokemonFullSprite extends Component {
  constructor(props) {
    super(props);
    this.pokeball_y_translate = new Animated.Value(0);
    this.pokeball_opacity = new Animated.Value(0);

    this.sprite_translateY = new Animated.Value(0);
    this.sprite_scale = new Animated.Value(0);
  }

  componentDidMount() {
    this.animateSwitchPokemon();
  }

  animateSwitchPokemon = () => {
    this.sprite_translateY.setValue(0);
    this.pokeball_opacity.setValue(0);
    this.pokeball_y_translate.setValue(0);
    this.sprite_scale.setValue(0);

    Animated.sequence([
      Animated.timing(this.pokeball_y_translate, {
        toValue: 1,
        easing: Easing.bounce,
        duration: 1000
      }),

      Animated.timing(this.pokeball_opacity, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }),

      Animated.timing(this.sprite_scale, {
        toValue: 1,
        duration: 500
      })
    ]).start();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isAlive !== this.props.isAlive && !this.props.isAlive) {
      Animated.timing(this.sprite_translateY, {
        duration: 900,
        toValue: 1
      }).start();
    } else if (prevProps.pokemon !== this.props.pokemon && this.props.isAlive) {
      this.animateSwitchPokemon();
    }
  }

  render() {
    const { spriteFront, spriteBack, orientation } = this.props;

    let sprite = orientation == "front" ? spriteFront : spriteBack;

    const pokemon_moveY = this.sprite_translateY.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1000]
    });

    const pokemon_scale = this.sprite_scale.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0.5, 1]
    });

    const pokeball_moveY = this.pokeball_y_translate.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 50, 25]
    });

    const pokeball_opacity = this.pokeball_opacity.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0.5, 0]
    });

    return (
      <View>
        <Animated.Image
          source={require("../../assets/images/things/pokeball.png")}
          style={{
            transform: [
              {
                translateY: pokeball_moveY
              }
            ],

            opacity: pokeball_opacity
          }}
        />

        <Animated.Image
          source={sprite}
          resizeMode={"contain"}
          style={[
            styles.image,
            {
              transform: [
                {
                  translateY: pokemon_moveY
                },
                {
                  scale: pokemon_scale
                }
              ]
            }
          ]}
        />
      </View>
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
