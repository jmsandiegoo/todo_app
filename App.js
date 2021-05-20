import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    { title: "buy coffee", key: 1 },
    { title: "create an app", key: 2 },
    { title: "play on the switch", key: 3 },
    { title: "eat", key: 4 },
  ]);

  const [todosCompleted, setTodosCompleted] = useState([]);

  const addTask = (todo) => {
    //set key
    if (todo.title.length >= 3) {
      const key = todos.length + todosCompleted.length + 1;
      todo.key = key;
      setTodos((currentTodos) => {
        currentTodos.push(todo);
        return [...currentTodos];
      });
    } else {
      Alert.alert("Oops!", "Todo must be 3 characters long", [
        { text: "Okay", onPress: () => console.log("Alert closed") },
      ]);
    }
  };

  const finishTask = (key) => {
    let todo = {};
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].key == key) {
        todo = todos[i];
        break;
      }
    }
    setTodos((currentTodos) => {
      return currentTodos.filter((item) => item.key != key);
    });
    setTodosCompleted((currentTodosCompleted) => {
      currentTodosCompleted.push(todo);
      return [...currentTodosCompleted];
    });
  };

  const undoTask = (key) => {
    let todo = {};
    for (let i = 0; i < todosCompleted.length; i++) {
      if (todosCompleted[i].key == key) {
        todo = todosCompleted[i];
        break;
      }
    }
    setTodosCompleted((currentTodosCompleted) => {
      return currentTodosCompleted.filter((item) => item.key != key);
    });
    setTodos((currentTodos) => {
      currentTodos.push(todo);
      currentTodos.sort((a, b) => a.key - b.key);
      return [...currentTodos];
    });
  };

  const deleteTask = (key) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((item) => item.key != key);
    });
    setTodosCompleted((currentTodosCompleted) => {
      return currentTodosCompleted.filter((item) => item.key != key);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTask={addTask} />
          <View style={styles.list}>
            {/* <FlatList
            style={{ flexGrow: 1 }}
            keyExtractor={(item) => item.key.toString()}
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} finishTask={finishTask} />
            )}
          /> */}
            <TodoList
              todos={todos}
              todosCompleted={todosCompleted}
              finishTask={finishTask}
              undoTask={undoTask}
              deleteTask={deleteTask}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232931",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
