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
import GambarTabung from "../../../assets/Tabung.jpg";

export default Tabung = () => {
  const MarginTop = () => <View style={{ marginTop: 15 }} />;
  const MarginTitle = () => <View style={{ marginTop: 10 }} />;

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}
          >
            Pengertian Tabung
          </Text>
          <MarginTitle />
        </View>
        <View>
          <Text>
            Bangun tabung merupakan suatu bangun ruang tiga dimensi yang
            memiliki tutup dan alas yang berbentuk persegi panjang dengan ukuran
            yang sama dan diselimuti oleh persegi panjang.
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={GambarTabung} style={{ width: 180, height: 220 }} />
        </View>
        <View>
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 24 }}>
            Sifat-Sifat Tabung
          </Text>
          <MarginTitle />
          <Text>Berikut sifat-sifat tabung : </Text>
          <MarginTitle />
          <Text>
            1. Tabung memiliki 3 buah sisi, 1 persegi panjang, 2 lingkaran.
          </Text>
          <Text>2. Tidak memiliki rusuk.</Text>
          <Text>3. Tidak memiliki titik sudut.</Text>
          <Text>4. Tidak memiliki bidang diagonal.</Text>
          <Text>5. Tidak memiliki bidang diagonal.</Text>
          <Text>
            6. Tabung memiliki sisi alas serta sisi atas berhadapan yang
            kongruen.
          </Text>
          <Text>
            7. Tinggi tabung merupakan jarak titik pusat bidang lingkaran alas
            dengan titik pusat lingkaran atas.
          </Text>
          <Text>
            8. Bidang tegak berdiri tegak berdiri yang disebut sebagai selimut
            tabung.
          </Text>
          <Text>
            9. Jaring-jaring tabung berwujud 2 buah lingkaran serta 1 persegi
            panjang.
          </Text>
        </View>
        <MarginTop />
        <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 18 }}>
          Rumus Tabung
        </Text>
        <MarginTitle />
        <View>
          <View style={styles.rumus}>
            <Text>a. Rumus luas alas tabung</Text>
            <Text style={{ marginLeft: 18 }}>Luas lingkaran = π × r²</Text>
          </View>
          <MarginTitle />
          <View style={styles.rumus}>
            <Text>b. Rumus volume tabung</Text>
            <Text style={{ marginLeft: 18 }}>Volume (V) = π × r² × t</Text>
          </View>
          <MarginTitle />
          <View style={styles.rumus}>
            <Text>c. Rumus keliling alas tabung</Text>
            <Text style={{ marginLeft: 18 }}>Keliling alas = 2 × π × r</Text>
          </View>
          <MarginTitle />
          <View style={styles.rumus}>
            <Text>d. Rumus luas selimut tabung</Text>
            <Text style={{ marginLeft: 18 }}>Luas selimut = 2 × π × r × t</Text>
          </View>
          <MarginTitle />
          <View style={styles.rumus}>
            <Text>e. Rumus jari-jari tabung</Text>
            <Text style={{ marginLeft: 18 }}>
              Jari-jari (r) = √[V : (π × t)]
            </Text>
          </View>
          <MarginTitle />
          <View style={styles.rumus}>
            <Text>f. Rumus luas permukaan tabung</Text>
            <Text style={{ marginLeft: 18 }}>
              Luas permukaan = 2 × π × r × (r + t)
            </Text>
          </View>
          <MarginTop />
          <View style={{ marginBottom: 40, marginLeft: 18 }}>
            <Text>Keterangan :</Text>
            <Text>V = Volume tabung (cm³)</Text>
            <Text>π = 227 atau 3,14</Text>
            <Text>r = Jari – jari / diameter tengah (cm)</Text>
            <Text>t = Tinggi (cm)</Text>
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
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 5,
    width: 200,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  rumus: {
    backgroundColor: "#DC5F00",
    padding: 10,
    borderRadius: 10,
    width: 350,
  },
});
