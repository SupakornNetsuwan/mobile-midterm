import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const StartGameScreen: React.FC<{ onStartGame: (rndNum: number) => void }> = ({ onStartGame }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to My Game</Text>
      <Button
        title="START GAME"
        onPress={() => {
          // ...เพิ่มโค้ด...
          const random = Math.floor(Math.random() * 100);
          console.log(random);
          onStartGame(random);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default StartGameScreen;
