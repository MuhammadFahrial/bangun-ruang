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
import GambarBola from "../../../assets/Bola.jpg";

export default Bola = () => {
  const MarginTop = () => <View style={{ marginTop: 15 }} />;
  const MarginTitle = () => <View style={{ marginTop: 10 }} />;

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}
          >
            Pengertian Bola
          </Text>
          <MarginTitle />
          <Text>
            Bola merupakan salah satu bangun ruang sisi lengkung yang dibatasi
            oleh satu bidang lengkung. Atau juga bisa didefinisikan sebagai
            sebuah bangun ruang berbentuk setengah lingkaran yang diputar
            mengelilingi garis tengahnya.
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={GambarBola} style={{ width: 300, height: 250 }} />
        </View>
        <View>
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 24 }}>
            Sifat-Sifat Bola
          </Text>
          <MarginTitle />
          <Text>Berikut Sifat-sifat bola : </Text>
          <MarginTitle />
          <Text>1. Bola memiliki 1 sisi serta 1 titik pusat.</Text>
          <Text>2. Bola tidak memiliki rusuk.</Text>
          <Text>3. Bola tidak memiliki titik sudut.</Text>
          <Text>4. Tidak memiliki bidang diagonal.</Text>
          <Text>5. Tidak memiliki bidang diagonal.</Text>
          <Text>6. Sisi bola disebut sebagai dinding bola.</Text>
          <Text>
            7. Jarak dinding ke titik pusat bola disebut sebagai jari-jari.
          </Text>
          <Text>
            8. Jarak dinding ke dinding serta melewati titik pusat disebut
            sebagai diameter.
          </Text>
          <MarginTop />
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 18 }}>
            Rumus Bola
          </Text>
          <MarginTitle />
          <View>
            <View style={styles.rumus}>
              <Text>a. Rumus volume bola</Text>
              <Text style={{ marginLeft: 18 }}>Volume (V) = 4/3 × π × r³</Text>
            </View>
            <MarginTitle />
            <View style={styles.rumus}>
              <Text>b. Rumus luas bola</Text>
              <Text style={{ marginLeft: 18 }}>Luas (L) = 4 × π × r²</Text>
            </View>
          </View>
          <MarginTop />
          <View style={{ marginBottom: 40, marginLeft: 18 }}>
            <Text>Keterangan :</Text>
            <Text>V : volume bola (cm³)</Text>
            <Text>L : luas permukaan bola (cm²)</Text>
            <Text>r : jari – jari bola (cm)</Text>
            <Text>π : 22/7 atau 3,14</Text>
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
  rumus: {
    backgroundColor: "#DC5F00",
    padding: 10,
    borderRadius: 10,
    width: 280,
  },
});
