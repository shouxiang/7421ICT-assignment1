import { View, Text, StyleSheet } from "react-native";

export default ({ text }) => (
  <View style={styles.container}>
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    backgroundColor: "#75E0FF",
    borderRadius: 2,
    paddingLeft: 10,
    marginTop: 10,
    justifyContent: "center",
  },
});
