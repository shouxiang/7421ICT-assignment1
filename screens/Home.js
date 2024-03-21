import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import Underline from "../components/Underline";
import TodoList from "../components/TodoList";
import MyButton from "../components/MyButton";
import Footer from "../components/Footer";

export default () => {
  return (
    <View style={styles.container}>
      <Title text={"My Todo List"} />
      <View style={[{ marginTop: 20 }]}></View>
      <Underline />
      <TodoList />
      <View style={[{ marginTop: 500 }]}></View>
      {/* <Underline /> */}
      {/* <MyButton title={"Add New Todo"} /> */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "95%",
    flexDirection: "column",
    alignSelf: "center",
    paddingTop: 30,
  },
  underline: {
    borderBottomWidth: 1.5,
    borderBottomColor: "black",
    width: "100%",
  },
});
