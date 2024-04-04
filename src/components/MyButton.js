import { Text, StyleSheet, Pressable } from "react-native";

import { activeButtonColor, pressedButtonColor } from "../constants/color";

export default ({ title, onPress, children }) => (
  <Pressable
    style={({ pressed }) => [
      styles.pressable,
      pressed ? styles.pressed : styles.active,
    ]}
    onPress={onPress}
  >
    {children}

    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  pressable: {
    // borderWidth: 1,
    borderRadius: 4,
    elevation: 3,
    minHeight: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  pressed: { backgroundColor: pressedButtonColor },
  active: { backgroundColor: activeButtonColor },

  text: {
    // borderWidth: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});
