import { View, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

const todo = ["Buy milk", "Buy bread", "Buy eggs"];

export default () => (
  <View style={styles.container}>
    {todo.map((item, index) => (
      <TodoItem text={item} key={index} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    width: "95%",
  },
});
