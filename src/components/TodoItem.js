import { View, Text, StyleSheet } from "react-native";
import { todoItemColor } from "../constants/color";

export default ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
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
  text: {
    fontSize: 15,
  },
});
