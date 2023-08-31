import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Colors from "../constants/colors";

const GameOverScreen: React.FC<{ onRestart: () => void; answer: number; rounds: number }> = ({
  answer,
  onRestart,
  rounds,
}) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {rounds}</Text>
      <Text>Correct Number was: {answer}</Text>
      <Button title="NEW GAME" color={Colors.primary} onPress={onRestart} />
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

export default GameOverScreen;
