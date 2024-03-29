import { View, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

export default ({ todos }) => (
  <View style={styles.container}>
    {todos.map((item, index) => (
      <TodoItem text={item} key={index} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
  },
});
