import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

export type MealNavigatorParam = {
  Categories: undefined;
  CategoryMeals: { categoryId: string; categoryTitle: string };
  MealDetail: { mealId: string; mealTitle: string };
};

const MealNavigator = () => {
  const Stack = createStackNavigator<MealNavigatorParam>();
  
  return (
    <Stack.Navigator initialRouteName="Categories" screenOptions={{}}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "Meal Categories", headerStyle: { backgroundColor: "#4a148c" }, headerTintColor: "white" }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: `ID-${route.params.categoryId.toUpperCase()}`,
          headerStyle: { backgroundColor: "#4a148c" },
          headerTintColor: "white",
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          title: "MealDetail",
          headerStyle: { backgroundColor: "#4a148c" },
          headerTintColor: "white",
          headerTitle: route.params.mealTitle,
        })}
      />
    </Stack.Navigator>
  );
};

export default MealNavigator;
