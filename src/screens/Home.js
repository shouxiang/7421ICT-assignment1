import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer/Home";
import { homeBackgroundColor } from "../constants/color";
import { useNavigation } from "@react-navigation/native";

const todo = ["Buy milk", "Buy bread", "Buy eggs"];

export default () => {
  const navigation = useNavigation();
  const clickAddNewTodo = () => {
    navigation.navigate("AddNewTodo");
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title text={"My Todo List"} />
      </View>
      <View style={styles.todoList}>
        <TodoList todos={todo} />
      </View>
      <View style={styles.footer}>
        <Footer handleOnPress={clickAddNewTodo} />
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
  footer: {
    flex: 1,
  },
});
