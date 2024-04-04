import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import { addTodoBackgroundColor } from "../constants/color";
import TodoForm from "../components/TodoForm";
import SaveButton from "../components/SaveButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleCancel = () => {
    navigation.navigate("Home");
    setTitle("");
    setDescription("");
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
          onChangeTitle={handleChangeTitle}
          onChangeDescription={handleChangeDescription}
        />
      </View>
      <View style={styles.saveButton}>
        <SaveButton onCancel={handleCancel} onSave={undefined} />
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
  saveButton: {
    // borderWidth: 1,
    flex: 2.5,
  },
});
