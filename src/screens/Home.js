import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import AddNewTodoButton from "../components/AddNewTodoButton";
import { homeBackgroundColor } from "../constants/color";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { loadData } from "../datamodel/mydata";

const initialTodos = [
  { title: "Monday", description: "Buy milk" },
  {
    title: "TUesday",
    description: "Buy milkaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  { title: "Monday", description: "Buy milkaaaaaaaaaaaaaaaaaaaddddddd" },
];

export default () => {
  const isFocused = useIsFocused();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fun = async () => {
      const data = await loadData("todos");
      if (data) {
        setTodos(data);
      }
    };
    fun();
  }, [isFocused]);

  const navigation = useNavigation();
  const navToAddNewTodo = () => {
    navigation.navigate("AddNewTodo");
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title text={"My Todo List"} />
      </View>
      <View style={styles.todoList}>
        <TodoList todos={todos} />
      </View>
      <View style={styles.addNewTodoButton}>
        <AddNewTodoButton onPress={navToAddNewTodo} />
      </View>
    </View>
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
  todoList: { flex: 15, paddingHorizontal: "3%", marginVertical: "2%" },
  addNewTodoButton: {
    flex: 1,
  },
});
