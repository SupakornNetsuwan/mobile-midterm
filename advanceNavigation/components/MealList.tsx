import React from "react";
import { FlatList, View, StyleSheet, ListRenderItem } from "react-native";
import { MealType } from "../models/meals";
import MealItem from "./MealItem";
import { MealNavigatorParam } from "../navigation/MealNavigator";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";

const MealList: React.FC<{ data: MealType[] }> = ({ data }) => {
  const navigate = useNavigation<NavigationProp<MealNavigatorParam>>();

  const renderMealItem: ListRenderItem<MealType> = ({ item }) => {
    return (
      //เขียนโค้ดเพิ่ม
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
    <View style={styles.list}>
      <FlatList style={{ width: "100%" }} data={data} renderItem={renderMealItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
