import React from "react";
import { View } from "react-native";
import CustomText from "../CustomText";

const HealthBar = ({ label, currentHealth, totalHealth }) => {
  let percent = (currentHealth / totalHealth) * 100;
  let healthColor =
    percent <= 15
      ? "healthCritical"
      : percent <= 45
        ? "healthWarning"
        : "healthOK";

  let progressColor = styles[healthColor];

  return (
    <View>
      <CustomText styles={styles.label}>{label}</CustomText>
      <View style={styles.container}>
        <View style={styles.rail}>
          <View style={[styles.progress, progressColor, { width: percent }]} />
        </View>
        <View style={styles.percent}>
          <CustomText styles={styles.percentText}>
            {parseInt(percent)}%
          </CustomText>
        </View>
      </View>
    </View>
  );
};

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
  progress: {
    height: 8
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
