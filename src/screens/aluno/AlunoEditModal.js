import React, { useState, useEffect } from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import TextInputBox from "../../components/textInputBox/TextInputBox";

function AlunoEditModal({
  modalVisible,
  setModalVisible,
  aluno,
  setAluno,
  onSave,
}) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idade, setIdade] = useState("");
  const [turma, setTurma] = useState("");

  useEffect(() => {
    if (aluno) {
      setNome(aluno.nome);
      setTelefone(aluno.telefone);
      setIdade(aluno.idade);
      setTurma(aluno.turma);
    }
  }, [aluno]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Editar Aluno</Text>
          {aluno && (
            <View>
              <Text>Nome</Text>
              <TextInputBox
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Nome"
                keyboardType="default"
              />

              <Text>Telefone</Text>
              <TextInputBox
                style={styles.input}
                value={telefone}
                onChangeText={setTelefone}
                placeholder="(00) 00000-0000"
                keyboardType="default"
              />

              <Text>Idade</Text>
              <TextInputBox
                style={styles.input}
                value={idade}
                onChangeText={setIdade}
                placeholder="000"
                keyboardType="default"
              />

              <Text>Turma</Text>
              <TextInputBox
                style={styles.input}
                value={turma}
                onChangeText={setTurma}
                placeholder="xx"
                keyboardType="default"
              />
            </View>
          )}
          <View style={styles.modalButtons}>
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
            <Button
              title="Editar"
              onPress={() => {
                aluno.nome = nome;
                aluno.telefone = telefone;
                aluno.idade = idade;
                aluno.turma = turma;

                setAluno(aluno);
                onSave(aluno);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  input: {
    width: 200,
    marginBottom: 30,
  },
});

export default AlunoEditModal;
