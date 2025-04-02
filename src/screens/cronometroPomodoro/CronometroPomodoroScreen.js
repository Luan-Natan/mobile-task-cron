import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import CustomButton from "../../components/customButtom/CustomButtom";
import CronometroPomodoroUtil from "../../utils/CronometroPomodoroUtil";

function CronometroPomodoroScreen() {
  const [getMinuto, setMinuto] = useState(20);
  const [getSegundo, setSegundo] = useState(0);
  const [getMilissegundo, setMilissegundo] = useState(0);

  const cronProps = {
    getMilissegundo: getMilissegundo,
    setMilissegundo: setMilissegundo,
    getSegundo: getSegundo,
    setSegundo: setSegundo,
    getMinuto: getMinuto,
    setMinuto: setMinuto,
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.cronometro}>
        {CronometroPomodoroUtil.FormatarTempo(
          getMinuto,
          getSegundo,
          getMilissegundo
        )}
      </Text>

      <View style={styles.containerBotao}>
        <CustomButton
          title="Começar"
          onPress={() => {
            CronometroPomodoroUtil.Comecar(cronProps);
          }}
        />

        <CustomButton
          title="Pausar"
          onPress={() => {
            CronometroPomodoroUtil.Pausar();
          }}
        />

        <CustomButton
          title="Reiniciar"
          onPress={() => {
            CronometroPomodoroUtil.Reiniciar(cronProps);
          }}
        />
      </View>
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
  containerBotao: {
    flexDirection: "row",
    margin: 30,
  },
  cronometro: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333",
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    textAlign: "center",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default CronometroPomodoroScreen;
