import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import FiltersNavigator from "./FiltersNavigator";
// import library ที่จำเป็น
import MealsFavTabNavigator from "./MealsFavTabNavigator";
// import screen ที่เกี่ยวข้อง

// สร้าง navigator ตามโจทย์กำหนด

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
// function MyXXNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }

// อาจกำหนด Navigator เพิ่มได้
// function MyYYNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }


// สร้าง Navigator หลัก
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <FiltersNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
