import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import { addTodoBackgroundColor } from "../constants/color";
import TodoForm from "../components/TodoForm";
import SaveButton from "../components/SaveButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("Input the title...");
  const [description, setDescription] = useState("Description...");
  const handleCancel = () => {
    setTitle("Input the title...");
    setDescription("Description...");
    navigation.navigate("Home");
  };
  const handleChangeTitle = (text) => {
    setTitle(text);
  };

  const handleChangeDescription = (text) => {
    setDescription(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title text={"Add New Todo"} />
      </View>
      <View style={styles.todoForm}>
        <TodoForm
          title={title}
          description={description}
          handleChangeTitle={handleChangeTitle}
          handleChangeDescription={handleChangeDescription}
        />
      </View>
      <View style={styles.footer}>
        <SaveButton handleCancel={handleCancel} handleSave={undefined} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "2%",
    padding: "2%",
    backgroundColor: addTodoBackgroundColor,
  },
  title: {
    // borderWidth: 1,
    flex: 1.5,
  },
  todoForm: {
    // borderWidth: 1,
    flex: 12,
    paddingHorizontal: "2%",
    // marginVertical: "2%",
  },
  footer: {
    // borderWidth: 1,
    flex: 2.5,
  },
});
