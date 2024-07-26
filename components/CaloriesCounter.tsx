import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CircularProgress from "./CircularProgress";
import { Colors } from "@/constants/Colors";
import AnimatedLinearProgress from "./AnimatedLinearProgress";

import AnimatedCircularProgress from "./AnimatedCircularProgress";

const CaloriesCounter = () => {
  return (
    <View style={[{ flex: 1 }, styles.container]}>
      <AnimatedCircularProgress
        size={200}
        width={15}
        //backgroundWidth={15}
        fill={69}
        count={2169}
        tintColor={Colors.kcal}
        backgroundColor={Colors.kcal + "0A"}
        arcSweepAngle={260}
        rotation={230}
        //fillLineCap="round"
        lineCap="round"
      />
      <View style={{ flex: 1, flexDirection: "column", gap: 10 }}>
        <View style={styles.macroCount}>
          <Text style={styles.macroText}>Protein</Text>
          <AnimatedLinearProgress
            progress={46}
            duration={500}
            height={8}
            backgroundColor={Colors.protein + "0A"}
            progressColor={Colors.protein}
            style={styles.progressBar}
          />
          <Text style={styles.macroFraction}>46/100 g</Text>
        </View>
        <View>
          <Text style={styles.macroText}>Carbs</Text>
          <AnimatedLinearProgress
            progress={46}
            duration={500}
            height={8}
            backgroundColor={Colors.carbs + "0A"}
            progressColor={Colors.carbs}
            style={styles.progressBar}
          />
          <Text style={styles.macroFraction}>46/100 g</Text>
        </View>
        <View>
          <Text style={styles.macroText}>Fat</Text>
          <AnimatedLinearProgress
            progress={46}
            duration={500}
            height={8}
            backgroundColor={Colors.fat + "0A"}
            progressColor={Colors.fat}
            style={styles.progressBar}
          />
          <Text style={styles.macroFraction}>46/100 g</Text>
        </View>
      </View>
    </View>
  );
};

export default CaloriesCounter;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    flexDirection: "row",
    gap: 20,
  },
  progressBar: {
    width: "auto",
    marginVertical: 5,
  },
  macroText: {
    fontFamily: "InterBold",
    fontSize: 12,
  },
  macroCount: {},
  macroFraction: {
    fontFamily: "Inter",
    fontSize: 10,
    color: "grey",
  },
});
