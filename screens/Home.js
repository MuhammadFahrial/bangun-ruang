import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Bg from "../assets/bg.jpg";
import Bg1 from "../assets/bck.jpg";
import Logo from "../assets/Logo.png";

export default Home = () => {
  const navigation = useNavigation();
  const MarginTop = () => <View style={{ marginTop: 15 }} />;

  const handleKubus = () => {
    navigation.navigate("Kubus", { name: "Hello Kubus" });
  };

  const handleBalok = () => {
    navigation.navigate("Balok", { name: "Hello Balok" });
  };

  const handleLimas = () => {
    navigation.navigate("Limas", { name: "Hello Limas" });
  };

  const handlePrisma = () => {
    navigation.navigate("Prisma", { name: "Hello Prisma" });
  };

  const handleBola = () => {
    navigation.navigate("Bola", { name: "Hello Bola" });
  };

  const handleTabung = () => {
    navigation.navigate("Tabung", { name: "Hello Tabung" });
  };

  const handleKerucut = () => {
    navigation.navigate("Kerucut", { name: "Hello Kerucut" });
  };

  return (
    // <View style={styles.container}>
    <>
      <ImageBackground source={Bg} style={styles.container}>
        <Image
          source={Logo}
          style={{
            width: 80,
            height: 80,
            position: "absolute",
            top: 20,
          }}
        />
        <Pressable style={styles.button} onPress={() => handleKubus()}>
          <ImageBackground source={Bg} style={styles.imageBg}>
            <Text style={styles.text}>KUBUS</Text>
          </ImageBackground>
        </Pressable>
        <Pressable style={styles.button} onPress={() => handleBalok()}>
          <ImageBackground source={Bg} style={styles.imageBg}>
            <Text style={styles.text}>BALOK</Text>
          </ImageBackground>
        </Pressable>
        <Pressable style={styles.button} onPress={() => handleLimas()}>
          <ImageBackground source={Bg} style={styles.imageBg}>
            <Text style={styles.text}>LIMAS</Text>
          </ImageBackground>
        </Pressable>
        <Pressable style={styles.button} onPress={() => handlePrisma()}>
          <ImageBackground source={Bg} style={styles.imageBg}>
            <Text style={styles.text}>PRISMA</Text>
          </ImageBackground>
        </Pressable>
        <Pressable style={styles.button} onPress={() => handleBola()}>
          <ImageBackground source={Bg} style={styles.imageBg}>
            <Text style={styles.text}>BOLA</Text>
          </ImageBackground>
        </Pressable>
        <Pressable style={styles.button} onPress={() => handleTabung()}>
          <ImageBackground source={Bg} style={styles.imageBg}>
            <Text style={styles.text}>TABUNG</Text>
          </ImageBackground>
        </Pressable>
        <Pressable style={styles.button} onPress={() => handleKerucut()}>
          <ImageBackground source={Bg} style={styles.imageBg}>
            <Text style={styles.text}>KERUCUT</Text>
          </ImageBackground>
        </Pressable>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4FD073",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  button: {
    // backgroundColor: "blue",
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    marginVertical: 6,
    width: 250,
    // borderRadius: 10,
    // backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "pink",
  },
  imageBg: {
    padding: 15,
    borderRadius: 50,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});
