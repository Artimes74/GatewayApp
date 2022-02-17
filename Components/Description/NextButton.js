import react, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  useNativeDriver,
  Text,
} from "react-native";
import { useFonts } from "expo-font";
import Svg, { G, Ellipse, Circle } from "react-native-svg";
import { Feather } from "@expo/vector-icons";

export default function NextButton({ percentage, scrollTo }) {
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);
  const animation = (tovalue) => {
    return Animated.timing(progressAnimation, {
      tovalue,
      duration: 250,
      useNativeDriver: true,
    }).start;
  };
  const size = 130;
  const strokewidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokewidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokDashoffset = null;

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      strokDashoffset = circumference - (circumference * value.value) / 100;

      if (progressRef?.current) {
        progressRef.current.NativeProps({
          strokDashoffset,
        });
      }
    });
  }, [percentage]);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokewidth}
          />
          <Circle
            stroke="#9571FB"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokewidth}
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference - (circumference * percentage) / 100
            }
          />
        </G>
      </Svg>
      <TouchableOpacity
        onPress={scrollTo}
        style={styles.Button}
        activeOpacity={0.6}
      >
        <Feather name="arrow-right" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    position: "absolute",
    backgroundColor: "#6C63FF",
    borderRadius: 100,
    padding: 28,
  },
});
