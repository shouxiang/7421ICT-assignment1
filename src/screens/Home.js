import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";
import { homeBackgroundColor } from "../constants/color";

const todo = ["Buy milk", "Buy bread", "Buy eggs"];

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title text={"My Todo List"} />
      </View>
      <View style={styles.todoList}>
        <TodoList todos={todo} />
      </View>
      <View style={styles.footer}>
        <Footer />
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
    flex: 1,
  },
  todoList: { flex: 15, paddingHorizontal: "3%" },
  footer: {
    flex: 1,
  },
});
