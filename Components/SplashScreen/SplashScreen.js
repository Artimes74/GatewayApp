import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import img from "../../assets/img/splashimg.png";

export default function SplashScreen() {
  const Navigation = useNavigation();

  const nav = () => {
    Navigation.navigate("Description");
  };

  useEffect(() => {
    setTimeout(() => {
      nav();
    }, 2000);
  }, []);

  return (
    <View style={styles.Container}>
      <Image
        source={img}
        style={{ width: "90%", height: "100%", alignSelf: "center" }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#493D8A",
    justifyContent: "center",
    alignItems: "center",
  },
});
