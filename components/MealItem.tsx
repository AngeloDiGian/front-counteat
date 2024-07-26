import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface MealItemProps {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

const MealItem: React.FC<MealItemProps> = ({
  name,
  calories,
  protein,
  carbs,
  fat,
}) => {
  return (
    <View style={styles.container}>
      <View /* style={styles.meal} */>
        <Text style={styles.name}>{name}</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text
            style={[
              styles.text,
              { color: Colors.kcal, backgroundColor: Colors.kcal + "0A" },
            ]}
          >
            {calories} kcal
          </Text>
          <Text
            style={[
              styles.text,
              { color: Colors.protein, backgroundColor: Colors.protein + "0A" },
            ]}
          >
            {protein} g
          </Text>
          <Text
            style={[
              styles.text,
              { color: Colors.carbs, backgroundColor: Colors.carbs + "0A" },
            ]}
          >
            {carbs} g
          </Text>
          <Text
            style={[
              styles.text,
              { color: Colors.fat, backgroundColor: Colors.fat + "0A" },
            ]}
          >
            {fat} g
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="close" size={24} color="lightgray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
    fontFamily: "Inter",
    color: "#000",
    marginBottom: 5,
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    borderRadius: 10,
  },
});

export default MealItem;
