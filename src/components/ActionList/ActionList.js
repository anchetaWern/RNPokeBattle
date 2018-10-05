import React from "react";
import { TouchableOpacity, FlatList } from "react-native";
import CustomText from "../CustomText";

import { connect } from "react-redux";

import { setMove } from "../../actions";

const ActionList = ({ setMove }) => {
  const data = [
    {
      label: "Fight",
      action: () => {
        setMove("select-pokemon-move");
      }
    },
    {
      label: "Switch",
      action: () => {
        setMove("select-pokemon");
      }
    }
  ];

  return (
    <FlatList
      data={data}
      numColumns={2}
      scrollEnabled={false}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.container} onPress={item.action}>
          <CustomText styles={styles.label}>{item.label}</CustomText>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = {
  container: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#ffd43b",
    padding: 20
  },
  label: {
    fontSize: 20
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setMove: move => {
      dispatch(setMove(move));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ActionList);
