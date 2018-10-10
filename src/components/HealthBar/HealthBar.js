import React, { Component } from "react";
import { View, Animated } from "react-native";
import CustomText from "../CustomText";

const available_width = 100;

class HealthBar extends Component {
  state = {
    currentHealth: this.props.currentHealth
  };

  constructor(props) {
    super(props);
    this.currentHealth = new Animated.Value(this.props.currentHealth);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentHealth !== this.props.currentHealth) {
      this.currentHealth.addListener(progress => {
        this.setState({
          currentHealth: progress.value
        });
      });

      Animated.timing(this.currentHealth, {
        duration: 1500,
        toValue: this.props.currentHealth
      }).start();
    }
  }

  render() {
    const { label } = this.props;

    return (
      <View>
        <CustomText styles={styles.label}>{label}</CustomText>
        <View style={styles.container}>
          <View style={styles.rail}>
            <Animated.View style={[this.getCurrentHealthStyles()]} />
          </View>
          <View style={styles.percent}>
            <CustomText styles={styles.percentText}>
              {parseInt(this.state.currentHealth / 5)}%
            </CustomText>
          </View>
        </View>
      </View>
    );
  }

  getCurrentHealthStyles = () => {
    var animated_width = this.currentHealth.interpolate({
      inputRange: [0, 250, 500],
      outputRange: [0, available_width / 2, available_width]
    });

    const color_animation = this.currentHealth.interpolate({
      inputRange: [0, 250, 500],
      outputRange: [
        "rgb(199, 45, 50)",
        "rgb(224, 150, 39)",
        "rgb(101, 203, 25)"
      ]
    });

    return {
      width: animated_width,
      height: 8, // height of the health bar
      backgroundColor: color_animation
    };
  };
}

const styles = {
  container: {
    height: 10,
    width: 130,
    marginBottom: 15,
    flexDirection: "row"
  },
  label: {
    paddingBottom: 2,
    color: "#212121"
  },
  rail: {
    height: 10,
    width: 100,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#616161"
  },
  healthOK: {
    backgroundColor: "#5db56d"
  },
  healthWarning: {
    backgroundColor: "#fcc419"
  },
  healthCritical: {
    backgroundColor: "#fa5252"
  },
  percent: {
    paddingLeft: 3
  },
  percentText: {
    fontSize: 10,
    color: "#212121"
  }
};

export default HealthBar;
