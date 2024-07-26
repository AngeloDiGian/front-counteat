import React from "react";
import { Animated, Text, View, StyleSheet } from "react-native";

interface AnimatedTextProps {
  value: Animated.Value;
  style?: object;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ value, style }) => {
  const animatedValue = value.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], // Adatta l'intervallo secondo le tue esigenze
    extrapolate: "clamp",
  });

  return (
    <Animated.Text style={[styles.text, style]}>{animatedValue}</Animated.Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AnimatedText;
