import { StyleSheet, Dimensions  } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16, 
    marginBottom: 16,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 1, 
    borderColor: "#ddd",
    alignSelf: 'center',
    width: windowWidth * 0.5,  
    height: 150,
  },
  cardText: {
    fontSize: 16,
    color: "#333", 
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
