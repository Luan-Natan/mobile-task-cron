import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import LogoWeb from "../../components/logoWeb/LogoWeb";
import GatoApi from "../../apis/GatoApi";

function GatoScreen() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    GatoApi.buscarImagemGato(setResult);
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gato API</Text>
      <LogoWeb source={result === null ? "" : result.url}></LogoWeb>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default GatoScreen;
