import { View, StyleSheet } from "react-native";
import MyButton from "./MyButton";
import Underline from "./Underline";

export default () => (
  <View style={styles.container}>
    <View style={styles.underline}></View>
    <View style={styles.button}>
      <MyButton title={"Add New Todo"} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flex: 1,
  },
  underline: { flex: 1, borderTopWidth: 2 },
  button: {
    // borderWidth: 1,
    flex: 4,
  },
});
