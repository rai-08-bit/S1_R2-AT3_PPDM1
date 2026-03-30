import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Screens/Home/index.js";
import Produtos from "./src/Screens/Produtos/index.js";
import Contato from "./src/Screens/Contato/index.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Página Inicial"
        }}
        />
        <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{
          title: "Página de Produtos"
        }}
        />
        <Stack.Screen
        name="Contato"
        component={Contato}
        options={{
          title: "Contatos"
        }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
