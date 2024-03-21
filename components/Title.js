import { View, Text, StyleSheet } from "react-native";
import Underline from "./Underline";

export default ({ text }) => (
  <View>
    <Text style={styles.title}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
