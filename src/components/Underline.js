import { View, StyleSheet } from "react-native";

export default () => <View style={styles.underline}></View>;

const styles = StyleSheet.create({
  underline: {
    borderColor: "black",
    // width: "100%",
    // height: 10,
    borderWidth: 1,
  },
});
