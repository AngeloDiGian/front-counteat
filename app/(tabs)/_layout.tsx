import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { Ionicons } from "@expo/vector-icons";
import ProfileHeader from "@/components/ProfileHeader";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#f9f9f9",
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
          margin: 10,
          padding: 10,
          borderRadius: 20,
          height: 70,
          borderTopWidth: 0,
        },
        tabBarIconStyle: {},
        tabBarLabelStyle: {
          fontFamily: "Inter",
          marginBottom: 10,
          fontSize: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          header: () => <ProfileHeader />,
          headerTransparent: true,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: "Progress",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons name="stats-chart" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
