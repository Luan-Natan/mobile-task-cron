const BASE_URL = "http://192.168.8.1:3000"; //http://localhost:3001

class TurmaApi {
    static async getTurmas(setResult) {
        try {
            const response = await fetch(BASE_URL + "/turmas");

            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error(error);
            alert("Erro ao buscar turma!");
        }
    }

    static async getTurmaById(id, setSelectedturma) {
        try {
            const response = await fetch(BASE_URL + `/turmas/${id}`);
            const data = await response.json();

            setSelectedturma(data);
        } catch (error) {
            console.error(error);
            alert("Erro ao buscar turma!");
        }
    }

    static async createTurma(turma) {
        await fetch(BASE_URL + "/turmas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome: turma.nome,
                anoAtivo: turma.anoAtivo,
                sala: turma.sala,
                quantidadeAlunos: turma.quantidadeAlunos,
            }),
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao criar turma");
            }
        });
    }

    static async updateTurma(turma) {
        await fetch(BASE_URL + `/turmas/${turma.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome: turma.nome,
                anoAtivo: turma.anoAtivo,
                sala: turma.sala,
                quantidadeAlunos: turma.quantidadeAlunos,
            }),
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao atualizar turma");
            }
        });
    }

    static async deleteTurma(turma) {
        await fetch(BASE_URL + `/turmas/${turma.id}`, {
            method: "DELETE",
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao excluir turma");
            }
        });
    }
}

export default TurmaApi;
