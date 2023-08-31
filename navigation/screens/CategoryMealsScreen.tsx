import React from "react";
import { View, ListRenderItem, Text, Button, StyleSheet, Platform, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { RootStackParamList } from "../App";
import { MealType } from "../models/meals";

type RouteProps = RouteProp<RootStackParamList, "CategoryMeals">;
type NavigationProps = NativeStackNavigationProp<RootStackParamList, "CategoryMeals">;

const CategoryMealsScreen = () => {
  const route = useRoute<RouteProps>();
  const navigate = useNavigation<NavigationProps>();

  const { categoryId, categoryTitle } = route.params;

  const filterdMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const renderMealItem: ListRenderItem<MealType> = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        duration={item.duration.toString()}
        complexity={item.complexity}
        affordability={item.affordability}
        image={item.imageUrl}
        onSelectMeal={() => {
          navigate.navigate("MealDetail", { mealId: item.id, mealTitle: item.title });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList style={{ width: "100%" }} data={filterdMeals} renderItem={renderMealItem} />
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
