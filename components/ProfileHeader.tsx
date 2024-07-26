import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { Colors } from "@/constants/Colors";

const ProfileHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <BlurView
      intensity={80}
      tint={"extraLight"}
      blurReductionFactor={5}
      style={{
        paddingTop: top,
        paddingBottom: 10,
        flex: 1,
        //backgroundColor: "#f1f1f1",
      }}
    >
      {/* <SafeAreaView style={{ flex: 1, paddingTop: top + 10 }}> */}
      <View
        style={{
          height: 60,
          paddingHorizontal: 20,
          gap: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "transparent",
        }}
      >
        <View style={styles.circle}>
          <TouchableOpacity style={styles.circle}>
            {/* <Text style={styles.lightFont}>A</Text> */}
          </TouchableOpacity>
        </View>
        <View style={styles.xAlign}>
          <Text style={styles.lightFont}>Welcome</Text>
          <Text style={styles.boldFont}>Angelo Di Gianfilippo</Text>
        </View>
      </View>
      {/* </SafeAreaView> */}
    </BlurView>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  lightFont: {
    fontFamily: "Inter",
    fontSize: 14,
    color: "dimgrey",
  },
  boldFont: {
    fontFamily: "InterBlack",
    fontSize: 18,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  xAlign: {
    flexDirection: "column",
  },
});
