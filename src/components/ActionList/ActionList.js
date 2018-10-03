import React from "react";
import { TouchableOpacity, FlatList } from "react-native";
import CustomText from "../CustomText";

const ActionList = ({ setMove }) => {
  const data = [
    {
      label: "Fight",
      action: () => {
        setMove("select-pokemon-move");
        // todo: add code for dispatching action to select Pokemon move
      }
    },
    {
      label: "Switch",
      action: () => {
        setMove("select-pokemon");
        // todo: add code for dispatching action to switch Pokemon
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

// todo: add mapStateToProps (team)

// todo: add mapDispatchToProps (setMove)

export default ActionList; // todo: convert component into a connected component
