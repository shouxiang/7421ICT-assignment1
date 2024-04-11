import { View, StyleSheet, Text, FlatList } from "react-native";
import TodoItem from "./TodoItem";

export default ({ todos, onDelete, onComplete }) => (
  <View style={styles.container}>
    {todos.length === 0 ? (
      <Text style={{ fontSize: 30, textAlign: "center", marginTop: 50 }}>
        No Items in your list
      </Text>
    ) : (
      // todos.map((item, index) => (
      //   <TodoItem
      //     key={index}
      //     title={item.title}
      //     description={item.description}
      //   />
      // ))
      <FlatList
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} onDelete={onDelete} onComplete={onComplete} />
        )}
        showsVerticalScrollIndicator={false}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
  },
});
