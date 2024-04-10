import { View, Text, StyleSheet } from "react-native";
import { todoItemColor } from "../constants/color";
import { List } from "react-native-paper";
import { eventIconColor } from "../constants/color";

export default ({ title, description }) => (
  <List.Section style={styles.container}>
    <List.Accordion
      title={title}
      left={() => <List.Icon color={eventIconColor} icon="calendar" />}
      titleStyle={{ fontSize: 20, color: "black" }}
      style={styles.accordion}
    >
      <View style={styles.description}>
        <Text style={{ fontSize: 15 }}>{description}</Text>
      </View>
    </List.Accordion>
    <View style={styles.buttonPanel}></View>
  </List.Section>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: todoItemColor,
    borderRadius: 10,
    paddingHorizontal: 5,
    overflow: "hidden",
    marginVertical: 5,
    // borderWidth: 1,
  },
  accordion: {
    backgroundColor: todoItemColor,
    height: 50,
    justifyContent: "center",
    paddingTop: 0,
    // borderWidth: 1,
  },
  description: {
    // borderWidth: 1,
    marginBottom: 5,
  },
  buttonPanel: {},
});
