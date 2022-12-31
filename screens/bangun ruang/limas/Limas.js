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
import { useNavigation } from "@react-navigation/native";
import GambarLimas from "../../../assets/Limas.jpg";
import LimasSegitiga from "../../../assets/limasSegitiga.jpg";
import LimasSegiempat from "../../../assets/limasSegiempat.jpg";
import LimasSegilima from "../../../assets/limasSegilima.jpg";
import LimasSegienam from "../../../assets/limasSegienam.jpg";

export default Limas = () => {
  const navigation = useNavigation();

  const MarginTop = () => <View style={{ marginTop: 15 }} />;
  const MarginTitle = () => <View style={{ marginTop: 10 }} />;
  const MargnBottom = () => <View style={{ marginBottom: 40 }} />;
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
            Pengertian Limas
          </Text>
          <MarginTitle />
          <Text>
            Limas merupakan suatu bangun ruang tiga dimensi yang dibatasi oleh
            alas berbentuk segi-n (dapat berupa segi tiga, segi empat, lima,
            dll) serta bidang sisi tegak berbentuk segitiga yang berpotongan di
            satu titik puncak.
          </Text>
          <Text>
            Terdapat banyak jenis limas yang dikategorikan dengan dilandasi
            bentuk alasnya. Antara lain : limas segitiga, limas segi empat,
            limas segi lima, dan yang lainnya. Lima memiliki alas berbentuk
            lingkaran disebut sebagai kerucut. Sementara untuk limas dengan alas
            yang berbentuk persegi disebut sebagai piramida.
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
            source={GambarLimas}
            style={{
              width: 400,
              height: 300,
              display: "flex",
            }}
          />
        </View>

        <View>
          <MarginTop />
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            a. Limas Segitiga
          </Text>
          <MarginTitle />
          <Image source={LimasSegitiga} style={{ width: 150, height: 150 }} />
          <MarginTitle />
          <Text>
            Bangun limas segitiga memiliki beberapa sifat atau ciri, diantaranya
            adalah sebagai berikut:
          </Text>
          <Text>
            1. Memiliki 4 sisi yakni : 1 sisi berbentuk segitiga yang berupa
            alas serta 3 sisi lainnya berbentuk segitiga dan merupakan sisi
            tegak.
          </Text>
          <Text>2. Memiliki 6 buah rusuk.</Text>
          <Text>
            3. Memiliki 4 titik sudut, antara lain: 3 sudut terletak di bagian
            alas serta 1 sudut terletak di bagian atas yang merupakan titik
            puncak.
          </Text>
          <MarginTop />
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 18 }}>
            Rumus Limas Segitiga
          </Text>
          <MarginTitle />
          <View>
            <View style={styles.rumus}>
              <Text>a. Rumus volume limas segitiga</Text>
              <Text style={{ marginLeft: 18 }}>
                Volume (V) = 1/3 × (1/2 × alas × tinggi) × tinggi
              </Text>
            </View>
            <MarginTitle />
            <View style={styles.rumus}>
              <Text>b. Rumus luas permukaan limas segitia</Text>
              <Text style={{ marginLeft: 18 }}>
                Luas permukaan (L) = (1/2 × a × t) + (3 × luas sisi tegak)
              </Text>
            </View>
          </View>
        </View>
        <Line />
        <View>
          {/* <MarginTop />
          <MarginTop /> */}
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            b. Limas segi empat
          </Text>
          <MarginTitle />
          <Image source={LimasSegiempat} style={{ width: 150, height: 150 }} />
          <MarginTitle />
          <Text>Sifat atau ciri bangun limas segi empat :</Text>
          <Text>
            1. Memiliki 5 sisi yakni : 1 sisi berbentuk persegi yang berupa alas
            serta 3 sisi lainnya berbentuk segitiga dan merupakan sisi tegak.
          </Text>
          <Text>2. Memiliki 8 rusuk.</Text>
          <Text>
            3. Memiliki 5 titik sudut, antara lain : 4 sudut terletak di bagian
            alas serta 1 sudut terletak di bagian atas yang merupakan titik
            puncak.
          </Text>
          <MarginTop />
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 18 }}>
            Rumus Limas Segi empat
          </Text>
          <MarginTitle />
          <View>
            <View style={styles.rumus}>
              <Text>a. Rumus volume limas segi empat</Text>
              <Text style={{ marginLeft: 18 }}>
                Volume = 1/3 × luas alas × tinggi limas = 1/3 × (s × s) × t
              </Text>
            </View>
            <MarginTitle />
            <View style={styles.rumus}>
              <Text>b. Rumus luas permukaan limas segi empat</Text>
              <Text style={{ marginLeft: 18 }}>
                Luas = (s × s) + (4 × luas sisi tegak) = (s × s) + (4 × (1/2 × a
                × t))
              </Text>
            </View>
            <MarginTop />
            <View style={{ marginLeft: 18 }}>
              <Text>Keterangan :</Text>
              <Text>s = panjang sisi</Text>
              <Text>t = tinggi limas</Text>
              <Text>a = alas</Text>
            </View>
          </View>
        </View>
        <Line />
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            c. Limas segi lima
          </Text>
          <MarginTitle />
          <Image source={LimasSegilima} style={{ width: 150, height: 150 }} />
          <MarginTitle />
          <Text>Sifat-sifat limas segi lima :</Text>
          <Text>
            1. Memiliki 6 sisi yaitu : 1 sisi berbentuk segi lima yang berupa
            alas serta 5 sisi lainnya berbentuk segitiga dan merupakan sisi
            tegak.
          </Text>
          <Text>2. Memiliki 10 rusuk.</Text>
          <Text>
            3. Memiliki 6 titik sudut, antara lain : 5 sudut terletak di bagian
            alas serta 1 sudut terletak di bagian atas yang merupakan titik
            puncak.
          </Text>
          <MarginTop />
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 18 }}>
            Rumus Limas Segi lima
          </Text>
          <View>
            <MarginTitle />
            <View style={styles.rumus}>
              <Text>a. Rumus volume limas segi lima</Text>
              <Text style={{ marginLeft: 18 }}>
                Volume = 1/3 × luas alas × tinggi
              </Text>
            </View>
            <MarginTitle />
            <View style={styles.rumus}>
              <Text>b. Rumus luas permukaan limas segi lima</Text>
              <Text style={{ marginLeft: 18 }}>
                Luas = luas alas + (5 × LΔ sisi tegak)
              </Text>
            </View>
          </View>
        </View>
        <Line />
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            d. Limas segi enam
          </Text>
          <MarginTitle />
          <Image source={LimasSegienam} style={{ width: 150, height: 150 }} />
          <MarginTitle />
          <Text>Sifat-sifat limas segi enam :</Text>
          <Text>
            1. Memiliki 7 sisi yakni, 1 sisi berbentuk segi enam yang berupa
            alas serta 6 sisi lainnya berbentuk segitiga dan merupakan sisi
            tegak.
          </Text>
          <Text>2. Memiliki 12 rusuk.</Text>
          <Text>
            3. Memiliki 7 titik sudut, antara lain : 6 sudut terletak di bagian
            alas serta 1 sudut terletak di bagian atas yang merupakan titik
            puncak.
          </Text>
          <MarginTop />
          <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 18 }}>
            Rumus Limas Segi enam
          </Text>
          <View>
            <MarginTitle />
            <View style={styles.rumus}>
              <Text>a. Rumus volume limas segi enam</Text>
              <Text style={{ marginLeft: 18 }}>
                Volume (V) = 1/3 × Lalas × tlimas
              </Text>
            </View>
            <MarginTitle />
            <View style={styles.rumus}>
              <Text>b. Rumus luas permukaan limas segi enam</Text>
              <Text style={{ marginLeft: 18 }}>
                Luas (L) = Lalas + (6 × LΔ sisi tegak)
              </Text>
            </View>
          </View>
          <MargnBottom />
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
    marginHorizontal: 5,
    width: 180,
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
