import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadData = async (key) => {
  try {
    const str = await AsyncStorage.getItem(key);
    if (str) {
      const myData = JSON.parse(str);
      return myData;
    }
  } catch (e) {
    console.error("Error in loadData", e);
  }
};

export const saveData = async (data, key) => {
  try {
    const myDataStr = JSON.stringify(data);
    // console.log("saveData: ", myDataStr);
    await AsyncStorage.setItem(key, myDataStr);
  } catch (e) {
    console.error("Error in saveData", e);
  }
};
