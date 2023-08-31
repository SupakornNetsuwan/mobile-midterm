import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [correctNumber, setCorrectNumber] = useState<number>(0);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  // ฟังก์ชันสำหรับการเริ่มเกมใหม่
  const configureNewGameHandler = () => {
    setCorrectNumber(0);
    setGuessRounds(0);
  };

  const startGameHandler = (rndNum: number) => setCorrectNumber(rndNum);

  // ฟังก์ชันสำหรับจัดการการจบเกม
  const gameOverHandler = (numOfRounds: number) => setGuessRounds(numOfRounds);

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (correctNumber > 0 && guessRounds <= 0) {
    // ทำการเรียก GameScreen
    content = <GameScreen answer={correctNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    // ทำการเรียก GameOverScreen
    content = <GameOverScreen answer={correctNumber} onRestart={configureNewGameHandler} rounds={guessRounds} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
