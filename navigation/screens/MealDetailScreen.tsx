import React from "react";
import { Image, View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

const MealDetailScreen: React.FC<NativeStackScreenProps<RootStackParamList, "MealDetail">> = ({
  navigation,
  route,
}) => {
  const meal = MEALS.find((meal) => meal.id === route.params.mealId);

  return (
    <View style={styles.screen}>
      <Image source={{ uri: meal?.imageUrl }} width={400} height={200} />
      <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10 }}>{meal?.title}</Text>
      <Text style={{ textAlign: "center" }}>{meal?.steps}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          navigation.navigate("Categories")
        }}
      />
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

export default MealDetailScreen;
