import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [name, setName] = useState("jm");
  const [age, setAge] = useState(22);
  const [person, setPerson] = useState({ name: "alyssa", age: 24 });

  const [people, setPeople] = useState([
    { name: "jm", key: "1" },
    { name: "mario", key: "2" },
    { name: "marty", key: "3" },
    { name: "shaun", key: "4" },
    { name: "tim", key: "5" },
    { name: "mark", key: "6" },
    { name: "pete", key: "7" },
  ]);

  const clickHandler = () => {
    setName("aly");
    setPerson({ name: "alyssa", age: 24 });
  };

  const pressHandler = (key) => {
    console.log(key);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.key != key);
    });
  };

  // Views, Text, Styles
  // return (
  //   <View style={styles.container}>
  //     <View style={styles.header}>
  //       <Text style={styles.boldText}>Hello, World!</Text>
  //     </View>
  //     <View style={styles.body}>
  //       <Text>Lorem impsum sit amet.</Text>
  //       <Text>Lorem impsum sit amet.</Text>
  //       <Text>Lorem impsum sit amet.</Text>
  //     </View>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  // Using State
  // return (
  //   <View style={styles.container}>
  //     <Text>My name is {name}</Text>
  //     <Text>
  //       Her name is {person.name} and her age is {person.age}
  //     </Text>
  //     <View style={styles.buttonContainer}>
  //       <Button title="Update State" color="white" onPress={clickHandler} />
  //     </View>
  //   </View>
  // );

  // Text Inputs
  // return (
  //   <View style={styles.container}>
  //     <Text>Enter name:</Text>
  //     <TextInput
  //       style={styles.input}
  //       placeholder="e.g. John Doe"
  //       onChangeText={(name) => setName(name)}
  //     />
  //     <Text>Enter age:</Text>
  //     <TextInput
  //       keyboardType="numeric"
  //       style={styles.input}
  //       placeholder="e.g. 20"
  //       onChangeText={(age) => setAge(age)}
  //     />
  //     <Text>Multi Line:</Text>
  //     <TextInput style={styles.input} placeholder="Enter Blog here" multiline />
  //     <Text>
  //       name: {name}, age: {age}
  //     </Text>
  //   </View>
  // );

  // List & Scroll View
  // return (
  //   <ScrollView>
  //     <View style={styles.listViewContainer}>
  //       {people.map((item) => {
  //         return (
  //           <View key={item.key}>
  //             <Text style={styles.item}>{item.name}</Text>
  //           </View>
  //         );
  //       })}
  //     </View>
  //   </ScrollView>
  // );

  // FlastList & Touchalbles
  return (
    <FlatList
      numColumns={2}
      keyExtractor={(item) => item.key}
      data={people}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listViewContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: "blue",
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    width: 200,
    margin: 10,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 30,
  },
});
