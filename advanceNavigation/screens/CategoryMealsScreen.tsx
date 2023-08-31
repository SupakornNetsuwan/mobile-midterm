import React from "react";
import { View, ListRenderItem, Text, Button, StyleSheet, Platform, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { MealNavigatorParam } from "../navigation/MealNavigator";
import { MealType } from "../models/meals";
import MealList from "../components/MealList";

type RouteProps = RouteProp<MealNavigatorParam, "CategoryMeals">;
type NavigationProps = DrawerNavigationProp<MealNavigatorParam, "CategoryMeals">;

const CategoryMealsScreen = () => {
  const route = useRoute<RouteProps>();
  const navigate = useNavigation<NavigationProps>();

  const { categoryId, categoryTitle } = route.params;

  const filterdMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return (
    <View style={styles.screen}>
      <MealList data={filterdMeals} />
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

export default CategoryMealsScreen;
