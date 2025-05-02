import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CronometroSimplesScreen from "./cronometroSimples/CronometroSimplesScreen";
import CronometroPomodoroScreen from "./cronometroPomodoro/CronometroPomodoroScreen";

const Tab = createBottomTabNavigator();

function CronometroScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Simples" component={CronometroSimplesScreen} />
      <Tab.Screen name="Pomodoro" component={CronometroPomodoroScreen} />
    </Tab.Navigator>
  );
}

export default CronometroScreen;
