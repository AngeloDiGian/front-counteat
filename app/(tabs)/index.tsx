import { Image, StyleSheet, Platform, ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import CaloriesCounter from "@/components/CaloriesCounter";
import { Colors } from "@/constants/Colors";
import WeeklyCalendar from "@/components/WeeklyCalendar";
import DailyMeals from "@/components/DailyMeals";

export default function HomeScreen() {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      style={{ paddingHorizontal: 20 }}
      contentContainerStyle={{
        paddingTop: headerHeight,
        paddingBottom: tabBarHeight,
      }}
    >
      <WeeklyCalendar />
      <CaloriesCounter />
      <DailyMeals />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
