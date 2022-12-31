import React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import IcHome from "../../assets/nav-icon/Home.png";
import IcQues from "../../assets/nav-icon/Notepad.png";
import IcProfile from "../../assets/nav-icon/User.png";

export default Nav = () => {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate("Home", { name: "Hello Home" });
  };

  const handleEvaluasi = () => {
    navigation.navigate("Evaluasi", { name: "Hello Evaluasi" });
  };
  const handleProfile = () => {
    navigation.navigate("Profile", { name: "Hello Profile" });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => handleHome()}>
        <Image source={IcHome} style={{ marginLeft: 3 }} />
        <Text style={styles.text}>Home</Text>
      </Pressable>
      <Pressable onPress={() => handleEvaluasi()}>
        <Image source={IcQues} style={{ marginLeft: 8 }} />
        <Text style={styles.text}>Evaluasi</Text>
      </Pressable>
      <Pressable onPress={() => handleProfile()}>
        <Image source={IcProfile} style={{ marginLeft: 4 }} />
        <Text style={styles.text}>Profile</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 80,
    paddingVertical: 10,
  },
  imageSize: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
  },
});
