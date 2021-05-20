import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, finishTask, deleteTask }) {
  return (
    <TouchableOpacity onPress={() => finishTask(item.key)}>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => deleteTask(item.key)}>
          <MaterialIcons name="delete" size={20} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderRadius: 10,
    backgroundColor: "#0D0D0D",
    overflow: "hidden",
    textTransform: "uppercase",
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    color: "#fff",
    marginLeft: 10,
  },
  icon: {
    color: "#53C5FF",
  },
});
