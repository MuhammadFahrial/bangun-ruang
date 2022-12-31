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
import GambarBalok from "../../../assets/Balok.jpg";
import Bg1 from "../../../assets/bck.jpg";

export default Balok = () => {
  const MarginTop = () => <View style={{ marginTop: 15 }} />;
  const MarginTitle = () => <View style={{ marginTop: 10 }} />;

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={Bg1}> */}
      <ScrollView style={{ padding: 20 }}>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}
          >
            Pengertian Balok
          </Text>
          <MarginTitle />
          <Text>
            Balok adalah suatu bangun ruang yang memiliki tiga sisi segi empat.
            Di mana pada masing- masing sisinya yang berhadapan dengan bentuk
            serta ukuran yang sama. Berbeda halnya dengan kubus di seluruh
            sisinya kongruen berbentuk persegi, dan pada balok hanya sisi yang
            berhadapan sama besar. Serta tidak berbentuk persegi, sebagian besar
            persegi panjang. Perhatikan gambar balok berikut ini!
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
          <Image
            style={{
              width: 320,
              height: 180,
              //   justifyContent: "center",
            }}
            source={GambarBalok}
          />
        </View>
        <MarginTop />
        <View>
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 24 }}>
            Sifat-Sifat Balok
          </Text>
          <MarginTitle />
          <Text>Berikut Sifat-sifat balok : </Text>
          <MarginTitle />
          <Text>
            1. Sedikitnya balok memiliki dua sisi yang berbentuk persegi
            panjang.
          </Text>
          <Text>
            2. Rusuk-rusuk yang sejajar memiliki ukuran yang sama panjang yaitu
            : AB = CD = EF = GH, dan AE = BF = CG = DH.
          </Text>
          <Text>
            3. Pada masing-masing bidang diagonal pada sisi yang berhadapan
            dengan ukuran yang sama panjang, yakni : ABCD = EFGH, ABFE = DCGH,
            dan BCFG = ADHE yang memiliki ukuran sama panjang.
          </Text>
          <Text>
            4. Masing-masing diagonal ruang pada balok memiliki ukuran yang sama
            panjang.
          </Text>
          <Text>
            5. Masing-masing bidang diagonalnya berbentuk persegi panjang.
          </Text>
        </View>
        <MarginTop />
        <View>
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 18 }}>
            Rumus Balok
          </Text>
          <MarginTitle />
          <View style={styles.rumus}>
            <Text>a. Rumus volume balok</Text>
            <Text style={{ marginLeft: 18 }}>
              Volume (V) = panjang × lebar × tinggi = p × l × t
            </Text>
          </View>
        </View>
        <MarginTop />
        <View style={styles.rumus}>
          <Text>b. Rumus luas kubus</Text>
          <Text style={{ marginLeft: 18 }}>
            Luas Permukaan (L) = 2 (panjang × lebar) + (panjang × tinggi) +
            (lebar × tinggi) = 2 (p.l + p.t + l.t)
          </Text>
          {/* <Image
            source={Luas}
            style={{ marginLeft: 18, marginTop: 4, width: 180, height: 50 }}
          /> */}
        </View>
        <MarginTop />
        <View style={{ marginBottom: 40, marginLeft: 18 }}>
          <Text>Keterangan :</Text>
          <Text>p = panjang</Text>
          <Text>l = lebar</Text>
          <Text>t = tinggi</Text>
        </View>
      </ScrollView>
      {/* </ImageBackground> */}
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
    width: 350,
  },
  contohSoal: {
    marginBottom: 40,
    borderRadius: 10,
    backgroundColor: "#E14D2A",
    padding: 10,
  },
});
