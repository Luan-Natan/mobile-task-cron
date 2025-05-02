import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../../components/customButtom/CustomButtom";
import CustomButtomIcon from "../../components/customButtomIcon/CustomButtomIcon";
import AlunoApi from "../../apis/AlunoApi";
import AlunoEditModal from "./AlunoEditModal";
import AlunoCreateModal from "./AlunoCreateModal";

function AlunoScreen() {
  const [resultAluno, setResultAluno] = useState(null);
  const [selectedAluno, setSelectedAluno] = useState(null);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [modalCreateVisible, setModalCreateVisible] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    AlunoApi.getAlunos(setResultAluno);
  }, [reload]);

  if (!resultAluno) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>Carregando...</Text>
      </View>
    );
  }

  const handleEditClick = (id) => {
    AlunoApi.getAlunoById(id, setSelectedAluno);
    setModalEditVisible(true);
  };
  const handleEditChanges = (aluno) => {
    AlunoApi.updateAluno(aluno);
    setModalEditVisible(false);
    setReload(!reload);
  };

  const handleCreateClick = () => {
    setModalCreateVisible(true);
  };
  const handleCreateChanges = (aluno) => {
    AlunoApi.createAluno(aluno);
    setModalCreateVisible(false);
    setReload(!reload);
  };

  const handleDeleteClick = (aluno) => {
    setReload(!reload);
    AlunoApi.deleteAluno(aluno);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Aluno API</Text>

      <View style={styles.containerTable}>
        <View style={styles.header}>
          <Text style={styles.headerText}>#</Text>
          <Text style={styles.headerText}>Nome</Text>
          <Text style={styles.headerText}>Telefone</Text>
          <Text style={styles.headerText}>Idade</Text>
          <Text style={styles.headerText}>Turma</Text>
          <Text style={styles.headerText}>Ações</Text>
        </View>

        <ScrollView style={styles.container}>
          {resultAluno.map((aluno, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{index + 1}</Text>
              <Text style={styles.cell}>{aluno.nome}</Text>
              <Text style={styles.cell}>{aluno.telefone}</Text>
              <Text style={styles.cell}>{aluno.idade}</Text>
              <Text style={styles.cell}>{aluno.turma}</Text>

              <View style={styles.actionsCell}>
                <CustomButtomIcon
                  style={styles.buttomEdit}
                  source="https://img.icons8.com/?size=100&id=zqRKVWtC1VeY&format=png&color=00197E"
                  onPress={() => {
                    handleEditClick(aluno.id);
                  }}
                ></CustomButtomIcon>

                <CustomButtomIcon
                  style={styles.buttomDelete}
                  source="https://img.icons8.com/?size=100&id=11705&format=png&color=4E0600"
                  onPress={() => {
                    handleDeleteClick(aluno);
                  }}
                ></CustomButtomIcon>
              </View>
            </View>
          ))}
        </ScrollView>

        <AlunoEditModal
          modalVisible={modalEditVisible}
          setModalVisible={setModalEditVisible}
          aluno={selectedAluno}
          setAluno={setSelectedAluno}
          onSave={handleEditChanges}
        />

        <AlunoCreateModal
          modalVisible={modalCreateVisible}
          setModalVisible={setModalCreateVisible}
          onSave={handleCreateChanges}
        />
      </View>
      <CustomButton
          title="Criar"
          onPress={() => {
            handleCreateClick();
          }}
        ></CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  containerTable: {
    flex: 1,
    margin: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    paddingVertical: 15,
    backgroundColor: "#343a40",
  },
  headerText: {
    flex: 1,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#f9f9f9",
  },
  cell: {
    flex: 1,
    color: "#333",
    textAlign: "center",
    alignSelf: "center",
  },
  actionsCell: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
  buttomEdit: {
    backgroundColor: "#7D97FF",
  },
  buttomDelete: {
    backgroundColor: "#e5655b",
  },
});

export default AlunoScreen;
