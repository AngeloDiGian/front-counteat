import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MealItem from "./MealItem";
import { Colors } from "@/constants/Colors";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface MealCardProps {
  title: string;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  meals: {
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  }[];
  onAddMeal: () => void;
}

const MealCard: React.FC<MealCardProps> = ({
  title,
  totalCalories,
  totalProtein,
  totalCarbs,
  totalFat,
  meals,
  onAddMeal,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "column", gap: 5 }}>
        <TouchableOpacity onPress={toggleOpen} activeOpacity={0.8}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>

            <Ionicons
              name={isOpen ? "chevron-up" : "chevron-down"}
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text
            style={[
              styles.text,
              { color: Colors.kcal, backgroundColor: Colors.kcal + "0A" },
            ]}
          >
            {totalCalories} kcal
          </Text>
          <Text
            style={[
              styles.text,
              { color: Colors.protein, backgroundColor: Colors.protein + "0A" },
            ]}
          >
            {totalProtein} g
          </Text>
          <Text
            style={[
              styles.text,
              { color: Colors.carbs, backgroundColor: Colors.carbs + "0A" },
            ]}
          >
            {totalCarbs} g
          </Text>
          <Text
            style={[
              styles.text,
              { color: Colors.fat, backgroundColor: Colors.fat + "0A" },
            ]}
          >
            {totalFat} g
          </Text>
        </View>
      </View>

      {isOpen && (
        <View style={styles.meals}>
          {meals.map((meal, index) => (
            <MealItem key={index} {...meal} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "InterBlack",
    color: "#000",
  },
  meals: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginHorizontal: -20,
    marginBottom: -20,
    marginTop: 20,
    borderRadius: 20,
  },
  text: {
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    borderRadius: 10,
  },
});

export default MealCard;
