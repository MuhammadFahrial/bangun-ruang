import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default Profile = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text>Profile</Text> */}
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
