import { View, StyleSheet } from "react-native";
import MyButton from "./MyButton";
import Underline from "./Underline";

export default () => (
  <View style={styles.container}>
    <Underline />
    <View style={[{ marginTop: 10 }]}></View>
    <MyButton title={"Add New Todo"} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    width: "100%",
    position: "absolute",
    bottom: 20,
  },
});
