import { StyleSheet, Dimensions  } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: windowWidth * 0.5,
    height: 40,
  }
});