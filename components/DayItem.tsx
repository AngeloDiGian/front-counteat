import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface DayItemProps {
  day: string;
  date: number;
  isSelected: boolean;
  onPress: () => void;
}

const DayItem: React.FC<DayItemProps> = ({
  day,
  date,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isSelected && styles.selectedContainer]}
    >
      <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>
        {day}
      </Text>
      {/* <View
        style={[styles.separator, isSelected && styles.selectedSeparator]}
      ></View> */}
      <Text style={[styles.dateText, isSelected && styles.selectedDateText]}>
        {date}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 12,
    padding: 8,
    borderRadius: 20,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 1,
    //borderColor: "rgba(0,0,0,0.05)",
    minWidth: 45,
    gap: 5,
  },
  selectedContainer: {
    //backgroundColor: "#f0f0f0",
    borderColor: "rgba(0,0,0,0.05)",
  },
  dayText: {
    fontSize: 12,
    fontFamily: "Inter",
    color: "#888",
  },
  selectedDayText: {
    color: "#0e0e0e",
  },
  dateText: {
    fontSize: 14,
    fontFamily: "Inter",
    color: "#888",
  },
  selectedDateText: {
    color: "#0e0e0e",
  },
  separator: {
    width: 3,
    height: 1,
    marginVertical: 5,
    backgroundColor: "#888",
    borderRadius: 2,
  },
  selectedSeparator: {
    backgroundColor: "#0e0e0e",
  },
});

export default DayItem;
