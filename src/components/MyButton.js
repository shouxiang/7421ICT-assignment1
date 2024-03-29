import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { activeButtonColor, pressedButtonColor } from "../constants/color";

export default ({ title, icon }) => (
  <Pressable
    style={({ pressed }) => [
      styles.pressable,
      pressed ? styles.pressed : styles.active,
    ]}
  >
    <AntDesign
      name="pluscircle"
      size={24}
      color="green"
      style={{ borderWidth: 1, marginRight: 10 }}
    />

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
  },
  pressed: { backgroundColor: pressedButtonColor },
  active: { backgroundColor: activeButtonColor },

  text: {
    borderWidth: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});
