const BASE_URL = "http://localhost:3001";

class AlunoApi {
  static async getAlunos(setResult) {
    try {
      const response = await fetch(BASE_URL + "/alunos");

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar Aluno!");
    }
  }

  static async getAlunoById(id, setSelectedAluno) {
    try {
      const response = await fetch(BASE_URL + `/alunos/${id}`);
      const data = await response.json();

      setSelectedAluno(data);
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar Aluno!");
    }
  }

  static async createAluno(aluno) {
    await fetch(BASE_URL + "/alunos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: aluno.nome,
        telefone: aluno.telefone,
        idade: aluno.idade,
        turma: aluno.turma,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao criar aluno");
      }
    });
  }

  static async updateAluno(aluno) {
    await fetch(BASE_URL + `/alunos/${aluno.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: aluno.nome,
        telefone: aluno.telefone,
        idade: aluno.idade,
        turma: aluno.turma,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao atualizar aluno");
      }
    });
  }

  static async deleteAluno(aluno) {
    await fetch(BASE_URL + `/alunos/${aluno.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao excluir aluno");
      }
    });
  }
}

export default AlunoApi;
