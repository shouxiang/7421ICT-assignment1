import { Text, StyleSheet, Pressable } from "react-native";
import { activeButtonColor, pressedButtonColor } from "../constants/color";

export default ({ title }) => (
  <Pressable
    style={({ pressed }) => [
      styles.pressable,
      pressed ? styles.pressed : styles.active,
    ]}
  >
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  pressable: {
    // borderWidth: 1,
    borderRadius: 4,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 25,
  },
  pressed: { backgroundColor: pressedButtonColor },
  active: { backgroundColor: activeButtonColor },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
