import react, { useState, useRef } from "react";
import { View, StyleSheet, Animated, useWindowDimensions } from "react-native";

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flexDirection: "row", height: 2 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [13, 26, 13],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 13,
    borderRadius: 6.5,
    //backgroundColor: "#F700FF",
    backgroundColor: "#493D8A",
    marginHorizontal: 12,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});
