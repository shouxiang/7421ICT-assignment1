import { View, Text, StyleSheet } from "react-native";
import {
  todoItemColor,
  eventIconColor,
  completedColor,
} from "../constants/color";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default ({ item, onDelete, onComplete }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        {item.isCompleted ? (
          <FontAwesome name="check-square-o" size={24} color={completedColor} />
        ) : (
          <MaterialCommunityIcons
            name="calendar"
            size={25}
            color={eventIconColor}
          />
        )}
        <Text style={{ fontSize: 20 }}>{item.title}</Text>
        <MaterialIcons
          name="expand-circle-down"
          size={24}
          color="black"
          onPress={() => setExpanded((cur) => !cur)}
          style={expanded ? { transform: [{ rotate: "180deg" }] } : null}
        />
      </View>
      {expanded && (
        <>
          <View style={styles.description}>
            <Text style={{ fontSize: 15 }}>{item.description}</Text>
          </View>
          <View style={styles.buttonPanel}>
            {!item.isCompleted && (
              <Ionicons
                name="cloud-done-sharp"
                size={24}
                color="green"
                onPress={() => onComplete(item.id)}
              />
            )}
            <Ionicons
              name="trash-sharp"
              size={24}
              color="red"
              onPress={() => {
                onDelete(item.id);
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: todoItemColor,
    borderRadius: 10,
    paddingHorizontal: 5,
    overflow: "hidden",
    marginVertical: 5,
    // borderWidth: 1,
  },

  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  description: {
    // borderWidth: 1,
    paddingHorizontal: 10,
  },
  buttonPanel: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    padding: 0,
    margin: 0,
  },
});

// export default ({ item }) => (
//   <List.Section style={styles.container}>
//     <List.Accordion
//       title={item.title}
//       left={() =>
//         item.isCompleted ? (
//           <FontAwesome name="check-square-o" size={24} color="green" />
//         ) : (
//           <MaterialCommunityIcons
//             name="calendar"
//             size={25}
//             color={eventIconColor}
//           />
//         )
//       }
//       titleStyle={{ fontSize: 20, color: "black" }}
//       style={styles.accordion}
//     >
//       <View style={styles.description}>
//         <Text style={{ fontSize: 15 }}>{item.description}</Text>
//       </View>
//       <View style={styles.buttonPanel}>
//         {item.isCompleted && (
//           <Ionicons name="cloud-done-sharp" size={24} color="green" />
//         )}
//         <Ionicons name="trash-sharp" size={24} color="red" />
//       </View>
//     </List.Accordion>
//   </List.Section>
// );
