class GatoApi {
  static async buscarImagemGato(setResult) {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );

      const data = await response.json();
      setResult(data[0]);
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar Gato!");
    }
  }
}

export default GatoApi;
