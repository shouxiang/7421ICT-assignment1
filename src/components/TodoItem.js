import { View, Text, StyleSheet } from "react-native";
import { todoItemColor } from "../constants/color";

export default ({ title, description }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: todoItemColor,
    borderRadius: 10,
    paddingHorizontal: 10,
    minHeight: 25,
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
    // borderWidth: 1,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    // borderWidth: 1,
  },
});
