import { View, StyleSheet } from "react-native";
import MyButton from "../MyButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { iconColor } from "../../constants/color";

export default ({ handleCancel, handleSave }) => (
  <View style={styles.container}>
    <View style={styles.cancel}>
      <MyButton
        title={"Cancel"}
        icon={
          <FontAwesome5
            name="backspace"
            size={24}
            color={iconColor}
            style={{ marginRight: 15 }}
          />
        }
        handleOnPress={handleCancel}
      />
    </View>

    <View style={styles.save}>
      <MyButton
        title={"Save"}
        icon={
          <Ionicons
            name="save"
            size={24}
            color={iconColor}
            style={{ marginRight: 15 }}
          />
        }
        handleOnPress={handleSave}
      />
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
