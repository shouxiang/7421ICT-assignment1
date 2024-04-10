import { View, Text, StyleSheet } from "react-native";

export default ({ text }) => (
  <>
    <View style={styles.title}>
      <Text style={styles.text}>{text}</Text>
    </View>
    <View style={styles.underline}></View>
  </>
);

const styles = StyleSheet.create({
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
