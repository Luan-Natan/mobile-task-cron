class TarefaUtil {
  static SalvarTarefa(getTask, getDate, getData, setData) {
    setData([...getData, { date: getDate, task: getTask }]);
  }
}

export default TarefaUtil;
