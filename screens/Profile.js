import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default Profile = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text>Profile</Text> */}
        {/* <View style={styles.profile}>
          <Text style={styles.name}>Chairil Anaz Yusuf</Text>
          <Text>151421101</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Moh. Renaldy Bulango</Text>
          <Text>151421175</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Anggraini Putri S. Nteya</Text>
          <Text>151421082</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Regita Restilia Mokodompis</Text>
          <Text>151421083</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Siti Rodiyah Hida</Text>
          <Text>151421084</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Marbella Hasan</Text>
          <Text>151421085</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Dwi Badriatul Fadillah</Text>
          <Text>151421086</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Viola Novinka Hidayat</Text>
          <Text>151421087</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Fatma H. Mangadi</Text>
          <Text>151421088</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Ni Kadek Sugianti</Text>
          <Text>151421089</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Aprinanda K.Tue</Text>
          <Text>151421090</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Sri Intan Katili</Text>
          <Text>151421091</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Nurwahidah Riana Lasulika</Text>
          <Text>151421092</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Ni Wayan Rusmini</Text>
          <Text>151421093</Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.name}>Yakom Arif H. Bokingo</Text>
          <Text>151420167</Text>
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    paddingHorizontal: 15,
  },
  profile: {
    marginTop: 5,
    marginBottom: 10,
    elevation: 5,
    borderRadius: 20,
    flexDirection: "column",
    backgroundColor: "#fff",
    // paddingHorizontal: 80,
    paddingLeft: 20,
    paddingVertical: 10,
    width: 350,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
