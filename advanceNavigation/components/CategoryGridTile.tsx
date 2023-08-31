import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile: React.FC<{ onSelect: () => void; color: string; title: string }> = ({
  onSelect,
  color,
  title,
}) => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        onSelect();
      }}
    >
      <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
        {/* <Text>{itemData.item.title}</Text> */}
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default CategoryGridTile;
