class CronometroPomodoroUtil {
  static Cron = 0;
  static Minuto = 20;
  static Segundo = 0;
  static Milissegundo = 0;

  static Temporizador(cronProps) {
    if (
      cronProps.getMinuto === 0 &&
      cronProps.getSegundo === 0 &&
      cronProps.getMilissegundo === 0
    ) {
      this.Pausar();
      return;
    }

    if (cronProps.getSegundo === 0 && cronProps.getMinuto > 0) {
      cronProps.getSegundo = 60;
      cronProps.getMinuto--;
    }

    if (cronProps.getMilissegundo === 0 && cronProps.getSegundo > 0) {
      cronProps.getMilissegundo = 1000;
      cronProps.getSegundo--;
    }

    cronProps.getMilissegundo -= 10;

    cronProps.setMinuto(cronProps.getMinuto);
    cronProps.setSegundo(cronProps.getSegundo);
    cronProps.setMilissegundo(cronProps.getMilissegundo);
  }

  static Comecar(cronProps) {
    this.Pausar();

    this.Cron = setInterval(() => {
      this.Temporizador(cronProps);
    }, 10);
  }

  static Pausar() {
    clearInterval(this.Cron);
  }

  static Reiniciar(cronProps) {
    this.Pausar();

    cronProps.setMinuto(this.Minuto);
    cronProps.setSegundo(this.Segundo);
    cronProps.setMilissegundo(this.Milissegundo);
  }

  static FormatarTempo = (minuto, segundo, milissegundo) => {
    const mm = String(minuto).padStart(2, "0");
    const ss = String(segundo).padStart(2, "0");
    const mmm = String(milissegundo).padStart(3, "0");

    return `${mm}:${ss}.${mmm}`;
  };
}

export default CronometroPomodoroUtil;
