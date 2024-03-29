import { View, Text, StyleSheet } from "react-native";

export default ({ text }) => (
  <View style={styles.container}>
    <View style={styles.title}>
      <Text style={styles.text}>{text}</Text>
    </View>
    <View style={styles.underline}></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flex: 1,
  },
  title: {
    // borderWidth: 1,
    marginBottom: 15,
  },
  underline: {
    borderTopWidth: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
