import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

export type RootStackParamList = {
  Categories: undefined;
  CategoryMeals: { categoryId: string; categoryTitle: string };
  MealDetail: { mealId: string; mealTitle: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
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
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
