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
import GambarKubus from "../../../assets/Kubus.jpg";

export default Kubus = () => {
  const MarginTop = () => <View style={{ marginTop: 15 }} />;
  const MarginTitle = () => <View style={{ marginTop: 10 }} />;

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}
          >
            Pengertian Kubus
          </Text>
          <MarginTitle />
          <Text>
            Kubus adalah bangun ruang yang dibatasi oleh enam sisi yang
            berbentuk persegi. Kubus mempunyai enam sisi yang berukuran sama
            (kongruen), mempunyai delapan titik sudut, dan dua belas rusuk yang
            sama panjang. Kita dapat melihat contohnya dalam wujud kotak kado,
            kotak mainan, kotak kapur tulis, kotak pos dan lain sebagainya yang
            berbentuk dasar kubus. Perhatikan gambar kubus dibawah ini!
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
          <Image source={GambarKubus} />
        </View>
        <MarginTop />
        <View>
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 24 }}>
            Sifat-Sifat Kubus
          </Text>
          <MarginTitle />
          <Text>Berikut Sifat-sifat Kubus :</Text>
          <MarginTitle />
          <Text>
            1. Memiliki 6 sisi berbentuk persegi yang memiliki ukuran sama luas.
          </Text>
          <Text>2. Memiliki 12 rusuk yang memiliki ukuran sama panjang.</Text>
          <Text>3. Memiliki 8 titik sudut.</Text>
          <Text>4. Memiliki 4 buah ruang diagonal.</Text>
          <Text>5. Memiliki 12 buah bidang diagonal.</Text>
        </View>
        <MarginTop />

        <View>
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 18 }}>
            Rumus Kubus
          </Text>
          <MarginTitle />
          <View style={styles.rumus}>
            <Text>a. Rumus volume kubus</Text>
            <Text style={{ marginLeft: 18 }}>
              Volume (V) = sisi × sisi × sisi = s³
            </Text>
          </View>
          {/* <Image
            source={Vol}
            style={{ marginLeft: 18, marginTop: 4, width: 200, height: 45 }}
          /> */}
        </View>
        <MarginTop />
        <View style={styles.rumus}>
          <Text>b. Rumus luas kubus</Text>
          <Text style={{ marginLeft: 18 }}>
            Luas (L) = 6 × sisi × sisi = 6 × s²
          </Text>
          {/* <Image
            source={Luas}
            style={{ marginLeft: 18, marginTop: 4, width: 180, height: 50 }}
          /> */}
        </View>
        <MarginTop />
        <View style={{ marginLeft: 18, marginBottom: 30 }}>
          <Text>Keterangan :</Text>
          <Text>L = Luas permukaan kubus (cm²)</Text>
          <Text>V = Volume kubus (cm³)</Text>
          <Text>s = Panjang rusuk kubus (cm)</Text>
        </View>
        {/* <MarginTop /> */}
        <MarginTitle />
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
    width: 290,
  },
});
