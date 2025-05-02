import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CadastrarScreen from "./cadastrar/CadastrarScreen";
import ListarScreen from "./listar/ListarScreen";

const Tab = createBottomTabNavigator();

function TarefaScreen() {
  const [getData, setData] = useState([]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Cadastrar">
        {(props) => <CadastrarScreen {...props} getData={getData} setData={setData} />}
      </Tab.Screen>

      <Tab.Screen name="Listar">
        {(props) => <ListarScreen {...props} getData={getData} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default TarefaScreen;
