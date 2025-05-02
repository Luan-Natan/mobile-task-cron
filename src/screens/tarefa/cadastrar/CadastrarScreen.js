import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import TextInputBox from "../../../components/textInputBox/TextInputBox";
import CustomButton from "../../../components/customButtom/CustomButtom";
import TarefaUtil from "../../../utils/TarefaUtil";

function CadastrarScreen({ getData, setData }) {
  const [getTask, setTask] = useState("");
  const [getDate, setDate] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Digite uma data</Text>
      <TextInputBox
        value={getDate}
        onChangeText={setDate}
        placeholder="dd/MM/yyyy"
        keyboardType="default"
      />

      <Text style={styles.title}>Digite uma tarefa</Text>
      <TextInputBox
        value={getTask}
        onChangeText={setTask}
        placeholder="Tarefa"
        keyboardType="default"
      />

      <CustomButton
        title="Salvar"
        onPress={() => {
          TarefaUtil.SalvarTarefa(getTask, getDate, getData, setData);
          setTask("");
          setDate("");
        }}
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

export default CadastrarScreen;
