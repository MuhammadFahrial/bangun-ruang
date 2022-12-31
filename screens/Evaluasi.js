import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import GambarTabung from "../assets/gambarSoalTabung.jpg";

export default Evaluasi = () => {
  const MarginTop = () => <View style={{ marginTop: 15 }} />;
  const MarginTitle = () => <View style={{ marginTop: 10 }} />;
  const MarginBottom = () => <View style={{ marginBottom: 15 }} />;

  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 15, paddingTop: 20 }}>
        {/* <Text>Evaluasi</Text> */}
        <View style={styles.contohSoal}>
          <Text style={{ fontWeight: "bold" }}>Soal Kubus :</Text>
          <View>
            <Text>
              Sebuah kubus memiliki panjang rusuk 10 cm. Berapa volume dan luas
              permukaan kubus tersebut?
            </Text>
          </View>
          <MarginTitle />
        </View>

        <MarginTitle />
        <View style={styles.contohSoal}>
          <Text style={{ fontWeight: "bold" }}>Soal Balok :</Text>
          <View>
            <Text>
              Sebuah balok memiliki ukuran panjang 10 cm, lebar 8 cm dan tinggi
              5 cm. Berapa volume dan luas permukaan balok tersebut?
            </Text>
          </View>
          <MarginTitle />
        </View>

        <MarginTitle />
        <View style={styles.contohSoal}>
          <Text style={{ fontWeight: "bold" }}>Soal Limas :</Text>
          <View>
            <Text>
              1. Sebuah limas segitiga memiliki luas alas 60 cm² dan luas sisi
              tegak 30 cm². Jika tinggi limas 10 cm, berapa volume dan luas
              permukaan limas tersebut?
            </Text>
            <MarginTitle />
            <Text>
              2. Tentukanlah luas permukaan dan volume limas segi empat dengan
              alas berbentuk persegi yang memiliki sisi 14 cm dan tinggi limas 6
              cm, serta tinggi segitiga sisi tegak ialah 8 cm!
            </Text>
          </View>
          <MarginTitle />
        </View>

        {/* <MarginTitle />
        <View style={styles.contohSoal}>
          <Text style={{ fontWeight: "bold" }}>Soal Limas :</Text>
          <View>
            <Text>
              Tentukanlah luas permukaan dan volume limas segi empat dengan alas
              berbentuk persegi yang memiliki sisi 14 cm dan tinggi limas 6 cm,
              serta tinggi segitiga sisi tegak ialah 8 cm!
            </Text>
          </View>
          <MarginTitle />
        </View> */}

        <MarginTitle />
        <View style={styles.contohSoal}>
          <Text style={{ fontWeight: "bold" }}>Soal Prisma :</Text>
          <View>
            <Text>
              1. Sebuah prisma segitiga memiliki panjang sisi alas 10 cm dan
              tinggi 3 cm. Jika tinggi prisma 15 cm, berapa volume dan luas
              permukaan prisma tersebut?
            </Text>
            <MarginTitle />
            <Text>
              2. Sebuah prisma segi empat memiliki ukuran panjang yaitu 20 cm,
              lebar 14 cm, dan tinggi 10 cm. Berapakah volume dan luas permukaan
              dari prisma tersebut!
            </Text>
          </View>
          <MarginTitle />
        </View>

        {/* <MarginTitle />
        <View style={styles.contohSoal}>
          <Text style={{ fontWeight: "bold" }}>Soal Prisma :</Text>
          <View>
            <Text>
              Sebuah prisma segi empat memiliki ukuran panjang yaitu 20 cm,
              lebar 14 cm, dan tinggi 10 cm. Berapakah volume dan luas permukaan
              dari prisma tersebut!
            </Text>
          </View>
          <MarginTitle />
        </View> */}

        <MarginTitle />
        <View style={styles.contohSoal}>
          <Text style={{ fontWeight: "bold" }}>Soal Bola :</Text>
          <View>
            <Text>
              Sebuah bola memiliki jari-jari 7 cm. Berapa volume dan luas
              permukaan bola tersebut?
            </Text>
          </View>
          <MarginTitle />
        </View>

        <MarginTitle />
        <View style={styles.contohSoal}>
          <Text style={{ fontWeight: "bold" }}>Soal Tabung :</Text>
          <View>
            <Text>
              Sebuah kerucut memiliki sisi alas dengan jari-jari 7 cm dan tinggi
              24 cm, berapa volume dan luas permukaan kerucut tersebut?
            </Text>
            <Image source={GambarTabung} style={{ width: 200, height: 200 }} />
            <MarginTitle />
            <Text>
              2. Diketahui volume sebuah tabung adalah 1.540 cm³. Jika tinggi
              tabung adalah 10 cm, berapa jari-jari tabung tersebut?
            </Text>
          </View>
        </View>

        {/* <MarginTitle />
        <View style={styles.contohSoal}>
          <Text style={{ fontWeight: "bold" }}>Soal Tabung :</Text>
          <View>
            <Text>
              Perhatikan gambar di bawah ini dan tentukan berapa volume dan luas
              permukaan, tabung tersebut!
            </Text>
          </View>
          <MarginTitle />
        </View> */}

        <MarginTitle />
        <View style={styles.contohSoal}>
          <Text style={{ fontWeight: "bold" }}>Soal Kerucut :</Text>
          <View>
            <Text>
              Sebuah kerucut memiliki sisi alas dengan jari-jari 7 cm dan tinggi
              24 cm, berapa volume dan luas permukaan kerucut tersebut?
            </Text>
          </View>
        </View>
      </View>
      <MarginBottom />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contohSoal: {
    // marginBottom: 40,
    borderRadius: 10,
    backgroundColor: "#E14D2A",
    padding: 10,
  },
});
