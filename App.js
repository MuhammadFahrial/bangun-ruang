import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Kubus from "./screens/bangun ruang/kubus/Kubus";
import Balok from "./screens/bangun ruang/balok/Balok";
import Limas from "./screens/bangun ruang/limas/Limas";
import Prisma from "./screens/bangun ruang/prisma/Prisma";
import Bola from "./screens/bangun ruang/bola/Bola";
import Tabung from "./screens/bangun ruang/tabung/Tabung";
import Kerucut from "./screens/bangun ruang/kerucut/Kerucut";
import Nav from "./screens/components/Nav";
import Evaluasi from "./screens/Evaluasi";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   headerTintColor: "white",
          //   headerStyle: {
          //     backgroundColor: "#2B3A55",
          //   },
          // }}
        />
        <Stack.Screen name="Kubus" component={Kubus} />
        <Stack.Screen name="Balok" component={Balok} />
        <Stack.Screen
          name="Limas"
          component={Limas}
          // options={{ headerShown: false }}
        />
        <Stack.Screen name="Prisma" component={Prisma} />
        <Stack.Screen name="Bola" component={Bola} />
        <Stack.Screen name="Tabung" component={Tabung} />
        <Stack.Screen name="Kerucut" component={Kerucut} />
        <Stack.Screen name="Evaluasi" component={Evaluasi} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      <Nav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
