import { View, Text, StyleSheet, TextInput } from "react-native";

export default ({
  title,
  description,
  handleChangeTitle,
  handleChangeDescription,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Input the title..."
        cursorColor="black"
        value={title}
        onChangeText={(text) => handleChangeTitle(text)}
        showSoftInputOnFocus={false}
      />
      <Text style={styles.title}>Description</Text>
      <TextInput
        style={[styles.input, { textAlignVertical: "top" }]}
        multiline
        numberOfLines={2}
        placeholder="Description..."
        cursorColor="black"
        value={description}
        onChangeText={(text) => handleChangeDescription(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: { fontWeight: "bold", fontSize: 18 },
  input: { borderWidth: 1, padding: 5, borderRadius: 5 },
});
