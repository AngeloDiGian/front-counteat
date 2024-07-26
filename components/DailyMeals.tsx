import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import MealCard from "./MealCard";

const mealsData = {
  breakfast: [
    {
      name: "Grilled salmon with roasted vegetables",
      calories: 120,
      protein: 15, // in grams
      carbs: 8, // in grams
      fat: 4, // in grams
    },
    {
      name: "Egg and veggie breakfast burrito",
      calories: 120,
      protein: 10, // in grams
      carbs: 12, // in grams
      fat: 5, // in grams
    },
  ],
  lunch: [
    {
      name: "Chicken salad",
      calories: 200,
      protein: 25, // in grams
      carbs: 10, // in grams
      fat: 8, // in grams
    },
    {
      name: "Quinoa and black beans",
      calories: 180,
      protein: 8, // in grams
      carbs: 30, // in grams
      fat: 2, // in grams
    },
  ],
  dinner: [
    {
      name: "Steak and veggies",
      calories: 300,
      protein: 25, // in grams
      carbs: 15, // in grams
      fat: 20, // in grams
    },
    {
      name: "Pasta with tomato sauce",
      calories: 250,
      protein: 10, // in grams
      carbs: 35, // in grams
      fat: 8, // in grams
    },
  ],
  snacks: [
    {
      name: "Apple slices",
      calories: 80,
      protein: 0, // in grams
      carbs: 22, // in grams
      fat: 0, // in grams
    },
    {
      name: "Yogurt",
      calories: 90,
      protein: 6, // in grams
      carbs: 12, // in grams
      fat: 2, // in grams
    },
  ],
};

const calculateTotalCalories = (
  meals: { name: string; calories: number }[]
) => {
  return meals.reduce((total, meal) => total + meal.calories, 0);
};

const calculateTotalCarbs = (meals: { name: string; carbs: number }[]) => {
  return meals.reduce((total, meal) => total + meal.carbs, 0);
};

const calculateTotalProteins = (meals: { name: string; protein: number }[]) => {
  return meals.reduce((total, meal) => total + meal.protein, 0);
};

const calculateTotalFats = (meals: { name: string; fat: number }[]) => {
  return meals.reduce((total, meal) => total + meal.fat, 0);
};

const DailyMeals: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MealCard
        title="Breakfast"
        totalCalories={calculateTotalCalories(mealsData.breakfast)}
        totalCarbs={calculateTotalCarbs(mealsData.breakfast)}
        totalFat={calculateTotalFats(mealsData.breakfast)}
        totalProtein={calculateTotalProteins(mealsData.breakfast)}
        meals={mealsData.breakfast}
        onAddMeal={() => console.log("Add Breakfast")}
      />
      <MealCard
        title="Lunch"
        totalCalories={calculateTotalCalories(mealsData.lunch)}
        totalCarbs={calculateTotalCarbs(mealsData.lunch)}
        totalFat={calculateTotalFats(mealsData.lunch)}
        totalProtein={calculateTotalProteins(mealsData.lunch)}
        meals={mealsData.lunch}
        onAddMeal={() => console.log("Add Lunch")}
      />
      <MealCard
        title="Dinner"
        totalCalories={calculateTotalCalories(mealsData.dinner)}
        totalCarbs={calculateTotalCarbs(mealsData.dinner)}
        totalFat={calculateTotalFats(mealsData.dinner)}
        totalProtein={calculateTotalProteins(mealsData.dinner)}
        meals={mealsData.dinner}
        onAddMeal={() => console.log("Add Dinner")}
      />
      <MealCard
        title="Snacks"
        totalCalories={calculateTotalCalories(mealsData.snacks)}
        totalCarbs={calculateTotalCarbs(mealsData.snacks)}
        totalFat={calculateTotalFats(mealsData.snacks)}
        totalProtein={calculateTotalProteins(mealsData.snacks)}
        meals={mealsData.snacks}
        onAddMeal={() => console.log("Add Snacks")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    gap: 20,
  },
});

export default DailyMeals;
