import { View, Text, StyleSheet, TextInput } from "react-native";

export default ({ title, description, onChangeTitle, onChangeDescription }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Input the title..."
        cursorColor="black"
        value={title}
        onChangeText={onChangeTitle}
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
        onChangeText={onChangeDescription}
        showSoftInputOnFocus={false}
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
