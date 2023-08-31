import React from "react";
import { View, Text, ListRenderItem, Button, FlatList, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryType } from "../models/category";
import CategoryGridTile from "../components/CategoryGridTile";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

const CategoriesScreen: React.FC<{ navigation: NativeStackNavigationProp<RootStackParamList, "Categories"> }> = ({
  navigation,
}) => {
  const renderGridItem: ListRenderItem<CategoryType> = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onSelect={() => {
          navigation.navigate("CategoryMeals", { categoryId: item.id, categoryTitle: item.title });
        }}
      />
    );
  };

  return (
    <View>
      <FlatList data={CATEGORIES} renderItem={renderGridItem} keyExtractor={(item) => item.id} numColumns={2} />
      <Text>Categories Screen</Text>
    </View>
  );
};

export default CategoriesScreen;
