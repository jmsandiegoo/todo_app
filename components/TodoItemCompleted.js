import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItemCompleted({ item, undoTask, deleteTask }) {
  return (
    <TouchableOpacity onPress={() => undoTask(item.key)}>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => deleteTask(item.key)}>
          <MaterialIcons name="delete" size={20} style={styles.icon} />
        </TouchableOpacity>
        <View>
          <Text style={styles.itemText}>{item.title}</Text>
          <Text style={styles.completedText}>Completed!</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#232323",
    borderRadius: 10,
    backgroundColor: "#232323",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    color: "#5C5C5C",
    textDecorationLine: "line-through",
    textTransform: "uppercase",
    marginLeft: 10,
  },
  completedText: {
    color: "#4ECCA3",
    marginLeft: 10,
  },
  icon: {
    color: "#53C5FF",
  },
});
