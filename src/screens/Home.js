import { View, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import AddNewTodoButton from "../components/AddNewTodoButton";
import { homeBackgroundColor } from "../constants/color";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { loadData, saveData } from "../datamodel/mydata";
import KeyboardAvoidingComponent from "../components/KeyboardAvoidingComponent";

export default () => {
  const isFocused = useIsFocused();
  const [todos, setTodos] = useState([]);
  const navigation = useNavigation();
  const navToAddNewTodo = () => {
    navigation.navigate("AddNewTodo");
  };

  const handleDelete = async (id) => {
    const curTodos = await loadData("todos");
    const newTodos = curTodos.filter((todo) => todo.id !== id);
    await saveData(newTodos, "todos");
    setTodos(newTodos);
  };

  const handleComplete = async (id) => {
    const curTodos = await loadData("todos");
    const newTodos = curTodos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    );
    await saveData(newTodos, "todos");
    setTodos(newTodos);
  };

  useEffect(() => {
    (async () => {
      const data = await loadData("todos");
      if (data) {
        setTodos(data);
      }
    })();
  }, [isFocused]);
  return (
    <KeyboardAvoidingComponent>
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Title text={"My Todo List"} />
        </View>
        <View style={styles.todoList}>
          <TodoList
            todos={todos}
            onDelete={handleDelete}
            onComplete={handleComplete}
          />
        </View>
        <View style={styles.addNewTodoButton}>
          <AddNewTodoButton onPress={navToAddNewTodo} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "2%",
    padding: "2%",
    backgroundColor: homeBackgroundColor,
  },
  title: {
    // borderWidth: 1,
    flex: 1,
  },
  todoList: {
    // borderWidth: 1,
    flex: 12,
    paddingHorizontal: "3%",
    marginVertical: "2%",
  },
  addNewTodoButton: {
    flex: 1,
  },
});
