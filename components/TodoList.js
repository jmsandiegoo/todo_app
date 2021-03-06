import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import TodoItem from "./TodoItem";
import TodoItemCompleted from "./TodoItemCompleted";

export default function TodoList({
  todos,
  todosCompleted,
  finishTask,
  undoTask,
  deleteTask,
}) {
  return (
    <ScrollView>
      {(() => {
        console.log(todos);
        if (todos.length == 0) {
          console.log(todos);
          return (
            <Text style={{ color: 'red' }}>
              Congratulations! You have finished all the task for today.
            </Text>
          );
        } else {
          return todos.map((item) => {
            return (            
            <TodoItem
              item={item}
              key={item.key.toString()}
              finishTask={finishTask}
              deleteTask={deleteTask}
            />);

          });
        }
      })()}

      {todosCompleted.map((item) => {
        return (
          <TodoItemCompleted
            item={item}
            key={item.key.toString()}
            undoTask={undoTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </ScrollView>
  );
}
