import { View, StyleSheet } from "react-native";

export default () => <View style={styles.underline}></View>;

const styles = StyleSheet.create({
  underline: {
    borderBottomWidth: 1.5,
    borderBottomColor: "black",
    width: "100%",
  },
});
