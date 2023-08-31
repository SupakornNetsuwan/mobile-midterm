import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealNavigator from "./MealNavigator";
import FavoritesScreen from "../screens/FavoritesScreen";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import FavNavigator from "./FavNavigator";

export type MealFavTabParamList = {
  Meal: undefined;
  Favorites: undefined;
};

const MealsFavTabNavigator = () => {
  const Navigator = createBottomTabNavigator<MealFavTabParamList>();

  return (
    <Navigator.Navigator initialRouteName="Meal" screenOptions={{ headerShown: false }}>
      <Navigator.Screen
        name="Meal"
        options={{
          tabBarActiveTintColor: "orange",
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name="food-fork-drink" size={size} color={color} />;
          },
        }}
        component={MealNavigator}
      />
      <Navigator.Screen
        name="Favorites"
        component={FavNavigator}
        options={{
          tabBarActiveTintColor: "orange",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="star" size={size} color={color} />;
          },
        }}
      />
    </Navigator.Navigator>
  );
};

export default MealsFavTabNavigator;
