import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DayItem from "./DayItem";

const getWeekDates = () => {
  const today = new Date();
  const startOfWeek = today.getDate() - today.getDay() + 1; // Monday as the start of the week
  const days = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today.setDate(startOfWeek + i));
    const day = currentDate.toLocaleDateString("en-US", { weekday: "short" });
    const date = currentDate.getDate();
    days.push({ day, date });
  }

  return days;
};

const WeeklyCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number>(
    new Date().getDate()
  );
  const weekDates = getWeekDates();

  return (
    <View style={styles.container}>
      {weekDates.map(({ day, date }) => (
        <DayItem
          key={date}
          day={day}
          date={date}
          isSelected={selectedDate === date}
          onPress={() => setSelectedDate(date)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
});

export default WeeklyCalendar;
