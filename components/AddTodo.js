import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function AddTodo({ addTask }) {
  const [title, setTitle] = useState("");
  const prepTodo = () => {
    const todo = {
      title: title,
    };
    addTask(todo);
  };
  return (
    <View style={styles.form}>
      <Text style={styles.text}>Enter Todo:</Text>
      <TextInput
        style={{ ...styles.text, ...styles.input }}
        placeholder="New Todo"
        onChangeText={(title) => setTitle(title)}
      />
      <TouchableOpacity style={styles.button} onPress={prepTodo}>
        <View>
          <Text>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    fontSize: 15,
    fontWeight: "normal",
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: "#4ECCA3",
    alignItems: "center",
  },
});
