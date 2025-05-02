import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./src/screens/home/HomeScreen";
import TarefaScreen from "./src/screens/tarefa/TarefaScreen";
import CronometroScreen from "./src/screens/cronometro/CronometroScreen";
import GatoScreen from "./src/screens/gato/GatoScreen";
import AlunoScreen from "./src/screens/aluno/AlunoScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Tarefas" component={TarefaScreen} /> 
        <Drawer.Screen name="Cronômetros" component={CronometroScreen} /> 
        <Drawer.Screen name="Gatos" component={GatoScreen} /> 
        <Drawer.Screen name="Alunos" component={AlunoScreen} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}