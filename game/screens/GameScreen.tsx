import { Keyboard } from "react-native";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput, PanResponder } from "react-native";
import Colors from "../constants/colors";

const GameScreen: React.FC<{
  onGameOver: (numOfRounds: number) => void;
  answer: number;
}> = ({ answer, onGameOver }) => {
  // ...เพิ่มโค้ดกำหนด state...
  const [enteredValue, setEnteredValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState<null | number>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [rounds, setRounds] = useState(0);

  // ฟังก์ชันสำหรับอัพเดทค่าที่ผู้เล่นกรอกให้กับสเตท enteredValue
  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText);
  };

  // ฟังก์ชันสำหรับเคลียร์ค่าในสเตท enteredValue
  const resetInputHandler = () => {
    setEnteredValue("");
  };

  // ฟังก์ชันสำหรับอัพเดทค่าสเตทต่างๆ เมื่อผู้เล่นกด confirm
  const confirmInputHandler = () => {
    // ...เพิ่มโค้ด แปลงค่า enteredValue ให้เป็นตัวเลข
    // ...เพิ่มโค้ด อัพเดทค่าในสเตทต่างๆ ตามที่กำหนด
    setSelectedNumber(parseInt(enteredValue));
    setConfirmed(true);
    setEnteredValue("");
    setRounds((prevRounds) => prevRounds + 1);
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (answer == parseInt(enteredValue)) onGameOver(rounds + 1);
  }, [enteredValue]);

  const answerHint = (userAnswer: number) => {
    if (userAnswer > answer) {
      return "The answer is lower.";
    } else if (userAnswer < answer) {
      return "The answer is higher.";
    }

    return "GameOver";
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text>Guess a Number</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.accent} onPress={resetInputHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler} />
          </View>
        </View>
      </View>

      {confirmed && (
        <View style={styles.resultContainer}>
          <Text>You selected</Text>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>{selectedNumber}</Text>
          </View>
          <Text>
            {selectedNumber ? answerHint(selectedNumber) : "Please write number properly"} Round: {rounds}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    elevation: 8,
    borderRadius: 20,
  },
  input: {
    width: 100,
    textAlign: "center",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
    height: 30,
    marginVertical: 10,
  },
  numberContainer: {
    borderWidth: 2,
    padding:4,
    height:50,
    width:50,
    borderColor: Colors.accent,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default GameScreen;
