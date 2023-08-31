import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FiltersScreen from "../screens/FiltersScreen";
import MealsFavTabNavigator from "./MealsFavTabNavigator";

export type DrawerNavigatorParam = {
  MealFavs: undefined;
  Filters: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigatorParam>();
const FiltersNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MealFavs"
      screenOptions={({ route }) => ({
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#4a148c" },
        drawerActiveTintColor: "orange",
        drawerInactiveTintColor: "gray",
      })}
    >
      <Drawer.Screen options={{ title: "Meals" }} name="MealFavs" component={MealsFavTabNavigator} />
      <Drawer.Screen name="Filters" component={FiltersScreen} />
    </Drawer.Navigator>
  );
};

export default FiltersNavigator;
