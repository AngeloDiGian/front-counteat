import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, ViewStyle } from "react-native";

interface AnimatedLinearProgressBarProps {
  progress: number; // Progress value between 0 and 100
  duration?: number; // Duration of the animation
  height?: number; // Height of the progress bar
  backgroundColor?: string; // Background color of the progress bar
  progressColor?: string; // Color of the progress
  style?: ViewStyle; // Additional styles for the progress bar
}

const AnimatedLinearProgressBar: React.FC<AnimatedLinearProgressBarProps> = ({
  progress,
  duration = 500,
  height = 10,
  backgroundColor = "#e0e0e0",
  progressColor = "#3b5998",
  style,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration,
      useNativeDriver: false,
    }).start();
  }, [progress, duration]);

  const widthInterpolated = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={[styles.container, { height, backgroundColor }, style]}>
      <Animated.View
        style={[
          styles.progressBar,
          { width: widthInterpolated, height, backgroundColor: progressColor },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBar: {
    borderRadius: 5,
  },
});

export default AnimatedLinearProgressBar;
