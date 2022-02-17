import raect, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";

const Screen = Dimensions.get("screen");
const Window = Dimensions.get("window");
const colorViewHeghit = Screen.height * 0.0685;

export default function OnBoardingitem({ item }) {
  let [fontsLoaded] = useFonts({
    f: require("../../assets/fonts/ff.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>nothing to show</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={[styles.container]}>
        <View
          style={{
            width: Screen.width,
            height: "18%",
            translateX: -25,
            flex: 0.2,
          }}
        >
          <View
            style={{
              width: (Screen.width * 80) / 100,
              height: "33%",
              backgroundColor: "#493D8A",
              borderRadius: 12,
            }}
          ></View>
          <View
            style={{
              width: (Screen.width * 65) / 100,
              height: "33%",
              backgroundColor: "#EF476F",
              borderRadius: 12,
            }}
          ></View>
          <View
            style={{
              width: (Screen.width * 50) / 100,
              height: "33%",
              backgroundColor: "#080708",
              borderRadius: 12,
            }}
          ></View>
        </View>
        <Image
          source={item.image}
          style={[styles.image, { resizeMode: "contain" }]}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: Screen.width,
            height: "30%",
            flex: 0.1,
          }}
        >
          <Text style={[styles.Title]}>{item.title}</Text>
          <Text style={styles.Description}>{item.FirstDescription}</Text>
          <Text style={styles.Description}>{item.SecondDescription}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Screen.width,
    height: Screen.height,
  },
  image: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: Screen.width,
    height: "40%",
    flex: 0.4,
  },
  Title: {
    color: "#493D8A",
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },
  Description: {
    color: "#62656D",
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
  },
});
