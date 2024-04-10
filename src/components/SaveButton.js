import { View, StyleSheet } from "react-native";
import MyButton from "./MyButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { iconColor } from "../constants/color";

export default ({ onCancel, onSave }) => (
  <View style={styles.container}>
    <View style={styles.cancel}>
      <MyButton title={"Back"} onPress={onCancel}>
        <FontAwesome5
          name="backspace"
          size={24}
          color={iconColor}
          style={{ marginRight: 15 }}
        />
      </MyButton>
    </View>

    <View style={styles.save}>
      <MyButton title={"Save"} onPress={onSave}>
        <Ionicons
          name="save"
          size={24}
          color={iconColor}
          style={{ marginRight: 15 }}
        />
      </MyButton>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  cancel: {},
  save: {},
});
