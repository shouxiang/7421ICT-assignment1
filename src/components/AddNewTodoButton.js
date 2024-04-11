import { View, StyleSheet } from "react-native";
import MyButton from "./MyButton";
import { AntDesign } from "@expo/vector-icons";
import { iconColor } from "../constants/color";

export default ({ onPress }) => (
  <View style={styles.container}>
    <View style={styles.underline}></View>
    <View style={styles.button}>
      <MyButton title={"Add New Todo"} onPress={onPress}>
        <AntDesign
          name="pluscircle"
          size={20}
          color={iconColor}
          style={{ marginRight: 20 }}
        />
      </MyButton>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flex: 1,
    justifyContent: "flex-end",
  },
  underline: {
    // borderWidth: 1,
    flex: 1,
    borderTopWidth: 2,
  },
  button: {
    // borderWidth: 1,
    flex: 1,
    justifyContent: "flex-end",
  },
});
