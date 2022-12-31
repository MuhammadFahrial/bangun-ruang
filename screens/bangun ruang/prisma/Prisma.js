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
import GambarPrisma from "../../../assets/Prisma.jpg";
import prismaSegitiga from "../../../assets/prismaSegitiga.jpg";
import prismaSegiempat from "../../../assets/prismaSegiempat.jpg";
import prismaSegilima from "../../../assets/prismaSegilima.jpg";
import prismaSegienam from "../../../assets/prismaSegienam.jpg";

export default Prisma = () => {
  const MarginTop = () => <View style={{ marginTop: 15 }} />;
  const MarginTitle = () => <View style={{ marginTop: 10 }} />;
  const MarginBottom = () => <View style={{ marginBottom: 40 }} />;
  const Line = () => (
    <Text>
      ----------------------------------------------------------------------------------------
    </Text>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}
          >
            Pengertian Prisma
          </Text>
          <MarginTitle />
          <Text>
            Prisma merupakan suatu bangun ruang tiga dimensi di mana alas dan
            juga tutupnya kongruen serta sejajar berbentuk segi-n. Sisi-sisi
            tegak dalam prisma memiliki beberapa bentuk, antara lain: persegi,
            persegi panjang, atau jajargenjang. Dilihat dari tegak rusuknya ,
            prisma terbagi menjadi dua macam, yaitu prisma tegak dan prisma
            miring.
          </Text>
          <Text>
            Prisma tegak merupakan prima di mana rusuk-rusuknya tegak lurus
            dengan alas dan juga tutupnya. Sementara untuk prisma miring
            merupakan prisma di mana rusuk-rusuk tegaknya tidak tegak lurus pada
            alas dan juga tutupnya. Jika kita melihat dari bentuk alasnya ,
            prisma terbagi lagi menjadi beberapa macam, yaitu prisma segitiga,
            prisma segi empat, prisma segi lima, dan lain sebagainya.
          </Text>
          <Text>
            Prisma yang alas dan juga tutupnya berbentuk persegi disebut sebagai
            balok dan kubus. Sementara untuk prisma yang memiliki alas dan
            tutupnya berbentuk lingkaran disebut sebagai tabung.
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={GambarPrisma} style={{ width: 400, height: 350 }} />
        </View>
        <View>
          <MarginTop />
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            a. Prisma Segitiga
          </Text>
          <MarginTitle />
          <Image source={prismaSegitiga} style={{ width: 150, height: 150 }} />
          <MarginTitle />
          <Text>
            Bangun prisma segitiga memiliki beberapa sifat atau ciri,
            diantaranya adalah sebagai berikut:
          </Text>
          <Text>
            1. Memiliki 5 sisi yakni, 2 sisi yang berupa alas atas serta bawah
            yang berbentuk segitiga, 3 sisi lainnya adalah tegak yang seluruhnya
            berbentuk segi empat
          </Text>
          <Text>2. Memiliki 9 rusuk.</Text>
          <Text>
            3. Memiliki 6 titik sudut, antara lain : 3 sudut terletak di bagian
            alas serta 3 sudut terletak di bagian atas.
          </Text>
          <MarginTop />
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 18 }}>
            Rumus Prisma Segitiga
          </Text>
          <MarginTitle />
          <View>
            <View style={styles.rumus}>
              <Text>a. Rumus luas permukaan prisma</Text>
              <Text style={{ marginLeft: 18 }}>
                Luas (L) = (2 × luas alas) + (luas seluruh bidang tegak) = (2 ×
                1/2 × a × t) + (keliling alas × tinggi)
              </Text>
            </View>
            <MarginTitle />
            <View style={styles.rumus}>
              <Text>b. Rumus volume prisma</Text>
              <Text style={{ marginLeft: 18 }}>
                Volume (V) = Luas alas × tinggi = (1/2 × a × t) × tinggi prisma
              </Text>
            </View>
          </View>
        </View>
        <Line />
        <View>
          {/* <MarginTop /> */}
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            b. Prisma Segi empat
          </Text>
          <MarginTitle />
          <Image source={prismaSegiempat} style={{ width: 150, height: 150 }} />
          <MarginTitle />
          <Text>
            Bangun ruang prisma segi empat memiliki sifat atau ciri, yaitu
            sebagai berikut :
          </Text>
          <Text>
            1. Memiliki 6 sisi yakni, 2 sisi yang berupa alas atas serta bawah
            yang berbentuk segi empat serta 4 sisi lainnya adalah tegak yang
            seluruhnya berbentuk persegi panjang
          </Text>
          <Text>2. Memiliki 12 rusuk.</Text>
          <Text>
            3. Memiliki 8 titik sudut, antara lain : 4 sudut terletak di bagian
            alas serta 4 sudut terletak di bagian atas.
          </Text>
          <MarginTop />
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 18 }}>
            Rumus Prisma Segi empat
          </Text>
          <MarginTitle />
          <View>
            <View style={styles.rumus}>
              <Text>a. Rumus volume permukaan prisma</Text>
              <Text style={{ marginLeft: 18 }}>
                Volume (V) = Lalas × tinggi
              </Text>
            </View>
            <MarginTitle />
            <View style={styles.rumus}>
              <Text>b. Rumus luas permukaan prisma</Text>
              <Text style={{ marginLeft: 18 }}>
                Luas (L) = (2 × luas alas) + (keliling alas × tinggi)
              </Text>
            </View>
          </View>
        </View>
        <Line />
        <View>
          {/* <MarginTop /> */}
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            c. Prisma Segi lima
          </Text>
          <MarginTitle />
          <Image source={prismaSegilima} style={{ width: 150, height: 250 }} />
          <MarginTitle />
          <Text>
            Bangun ruang prisma segi lima memiliki sifat atau ciri, antara lain
            sebagai berikut :
          </Text>
          <Text>
            1. Memiliki 7 sisi yakni, 2 sisi yang berupa alas atas serta bawah
            yang berbentuk segi lima dan 5 sisi lainnya adalah tegak yang
            seluruhnya berbentuk persegi panjang
          </Text>
          <Text>2. Memiliki 15 rusuk.</Text>
          <Text>
            3. Memiliki 10 titik sudut, antara lain : 5 sudut terletak di bagian
            alas serta 5 sudut terletak di bagian atas.
          </Text>
          <MarginTop />
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 18 }}>
            Rumus Prisma Segi lima
          </Text>
          <MarginTitle />
          <View>
            <View style={styles.rumus}>
              <Text>a. Rumus volume prisma</Text>
              <Text style={{ marginLeft: 18 }}>
                Volume (V) = luas alas × tinggi = (5 × 1/2 × a × t) × tinggi
                prisma
              </Text>
            </View>
            <MarginTitle />
            <View style={styles.rumus}>
              <Text>b. Rumus luas permukaan prisma</Text>
              <Text style={{ marginLeft: 18 }}>
                Luas (L) = (2 × luas alas) + (keliling alas × tinggi)
              </Text>
            </View>
          </View>
        </View>
        <Line />
        <View>
          {/* <MarginTop /> */}
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            d. Prisma Segi enam
          </Text>
          <MarginTitle />
          <Image source={prismaSegienam} style={{ width: 150, height: 150 }} />
          <MarginTitle />
          <Text>
            Bangun ruang prisma segi enam memiliki sifat atau ciri, yaitu
            sebagai berikut :
          </Text>
          <Text>
            1. Memiliki 8 sisi yakni, 2 sisi berbentuk segi enam yang berupa
            alas atas serta bawah dan 6 sisi lainnya tegak yang seluruhnya
            berbentuk segi empat
          </Text>
          <Text>2. Memiliki 18 rusuk.</Text>
          <Text>
            3. Memiliki 12 titik sudut, antara lain : 6 sudut terletak di bagian
            alas serta 6 sudut terletak di bagian atas.
          </Text>
          <MarginTop />
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 18 }}>
            Rumus Prisma Segi enam
          </Text>
          <MarginTitle />
          <View>
            <View style={styles.rumus}>
              <Text>a. Rumus volume prisma</Text>
              <Text style={{ marginLeft: 18 }}>V = luas alas × tinggi</Text>
            </View>
            <MarginTitle />
            <View style={styles.rumus}>
              <Text>b. Rumus luas permukaan prisma</Text>
              <Text style={{ marginLeft: 18 }}>
                L = (2 × luas alas) + luas selimut
              </Text>
            </View>
          </View>
        </View>
        <MarginBottom />
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
