import React from "react";
import FavoritesScreen from "../screens/FavoritesScreen";
import { createStackNavigator } from "@react-navigation/stack";

export type FavNavigatorParamList = { MainFavorites: undefined };

const FavNavigator = () => {
  const Stack = createStackNavigator<FavNavigatorParamList>();
  return (
    <Stack.Navigator initialRouteName="MainFavorites">
      <Stack.Screen name="MainFavorites" component={FavoritesScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default FavNavigator;
