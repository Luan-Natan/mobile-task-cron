import React, { useState, useEffect } from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import TextInputBox from "../../components/textInputBox/TextInputBox";

function TurmaCreateModal({
  modalVisible,
  setModalVisible,
  onSave,
}) {
  const [nome, setNome] = useState("");
  const [anoAtivo, setAnoAtivo] = useState("");
  const [sala, setSala] = useState("");
  const [quantidadeAlunos, setQuantidadeAlunos] = useState("");

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Criar Turma</Text>
          {
            <View>
              <Text>Nome</Text>
              <TextInputBox
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Nome"
                keyboardType="default"
              />

              <Text>Ano Ativo</Text>
              <TextInputBox
                style={styles.input}
                value={anoAtivo}
                onChangeText={setAnoAtivo}
                placeholder="0000"
                keyboardType="default"
              />

              <Text>Sala</Text>
              <TextInputBox
                style={styles.input}
                value={sala}
                onChangeText={setSala}
                placeholder="00"
                keyboardType="default"
              />

              <Text>Quant. Alunos</Text>
              <TextInputBox
                style={styles.input}
                value={quantidadeAlunos}
                onChangeText={setQuantidadeAlunos}
                placeholder="00"
                keyboardType="default"
              />
            </View>
          }
          <View style={styles.modalButtons}>
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
            <Button
              title="Criar"
              onPress={() => {
                const turma = {
                  nome,
                  anoAtivo,
                  sala,
                  quantidadeAlunos,
                };

                onSave(turma);
                
                setNome("");
                setAnoAtivo("");
                setSala("");
                setQuantidadeAlunos("");
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

export default TurmaCreateModal;
