import { View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import Title from "../components/Title";
import { addTodoBackgroundColor } from "../constants/color";
import TodoForm from "../components/TodoForm";
import SaveButton from "../components/SaveButton";
import { useNavigation } from "@react-navigation/native";
import { loadData, saveData } from "../datamodel/mydata";

export default () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (text) => {
    setTitle(text);
  };

  const handleChangeDescription = (text) => {
    setDescription(text);
  };

  const handleCancel = () => {
    navigation.navigate("Home");
    setTitle("");
    setDescription("");
  };

  const handleSave = async () => {
    if (title.trim().length === 0 || description.trim().length === 0) {
      return;
    }
    let curTodos = await loadData("todos");
    if (!curTodos) {
      curTodos = [];
    }
    curTodos.push({ id: uuidv4(), title, description });

    await saveData(curTodos, "todos");
    setTitle("");
    setDescription("");
    Alert.alert("Todo Added Successfully", null, [
      {
        text: "OK",
        // onPress: () => console.log("OK Pressed"),
        style: "cancel",
        textAlign: "center",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title text="Add New Todo" />
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
        <SaveButton onCancel={handleCancel} onSave={handleSave} />
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
