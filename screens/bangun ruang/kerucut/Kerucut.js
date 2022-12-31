import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import GambarKerucut from "../../../assets/Kerucut.jpg";

export default Kerucut = () => {
  const MarginTop = () => <View style={{ marginTop: 15 }} />;
  const MarginTitle = () => <View style={{ marginTop: 10 }} />;

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}
          >
            Pengertian Kerucut
          </Text>
          <MarginTitle />
          <Text>
            Kerucut merupakan salah satu bangun ruang yang memiliki sebuah alas
            yang berbentuk lingkaran dengan selimut yang membuat irisan dari
            lingkaran.
          </Text>
        </View>
        <MarginTop />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={GambarKerucut} style={{ width: 250, height: 200 }} />
        </View>
        <MarginTop />
        <View>
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 24 }}>
            Sifat-Sifat Kerucut
          </Text>
          <MarginTitle />
          <Text>
            Terdapat beberapa sifat pada bangun ruang kerucut, antara lain
            sebagai berikut:
          </Text>
          <MarginTitle />
          <Text>1. Kerucut memiliki 2 sisi.</Text>
          <Text>2. Kerucut tidak memiliki rusuk.</Text>
          <Text>3. Kerucut memiliki 1 titik sudut.</Text>
          <Text>
            4. Jaring-jaring kerucut terdiri atas lingkaran serta segitiga.
          </Text>
          <Text>5. Tidak memiliki bidang diagonal.</Text>
          <Text>6. Tidak memiliki bidang diagonal.</Text>
        </View>
        <MarginTop />
        <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 18 }}>
          Rumus Kerucut
        </Text>
        <MarginTitle />
        <View>
          <View style={styles.contohSoal}>
            <Text>a. Rumus menghitung volume</Text>
            <Text style={{ marginLeft: 18 }}>Volume (V) = 13 × π × r² × t</Text>
          </View>
          <MarginTitle />
          <View style={styles.contohSoal}>
            <Text>b. Rumus menghitung luas</Text>
            <Text style={{ marginLeft: 18 }}>Luas (L) = π × r (r + s)</Text>
          </View>
          <MarginTop />
          <View style={{ marginBottom: 40, marginLeft: 18 }}>
            <Text>Keterangan :</Text>
            <Text>r = jari – jari (cm)</Text>
            <Text>π = 227 atau 3,14</Text>
            <Text>t = tinggi (cm)</Text>
            <Text>s = garis pelukis kerucut</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 25,
  },
  contohSoal: {
    // marginBottom: 40,
    borderRadius: 10,
    backgroundColor: "#E14D2A",
    padding: 10,
    width: 300,
  },
});
