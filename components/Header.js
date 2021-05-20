import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Today</Text>
      <Text style={styles.underline}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 105,
    paddingTop: 50,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
  },
  title: {
    // textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 25,
  },
  underline: {
    backgroundColor: "#4ECCA3",
    height: 5,
    width: 40,
    margin: 7,
  },
});
