import { View, StyleSheet, FlatList } from "react-native";
import CustomCard from "../../components/customCard/CustomCard";

function ListarScreen({ getData }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={getData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CustomCard id={item.date} content={item.task} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 30,
    padding: 30,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default ListarScreen;