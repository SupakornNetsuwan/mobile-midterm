import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props: any) => {
  const favMeals = MEALS.filter((meal) => ["m1", "m2"].includes(meal.id));

  return (
    <View style={styles.screen}>
      <MealList data={favMeals} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
