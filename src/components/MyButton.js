import { Text, StyleSheet, Pressable } from "react-native";

export default ({ title }) => (
  <Pressable style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    paddingVertical: 6,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#1969FF",
    width: "100%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
