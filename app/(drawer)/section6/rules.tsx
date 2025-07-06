import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "@/constants/theme";
import { CustomBackground } from "@/components/screens/CustomBackground";

export default function RulesScreen() {
  const insets = useSafeAreaInsets();
  const isDark = "dark"; //colorScheme === 'dark';

  return (
    <CustomBackground>
      <View style={{ backgroundColor: COLORS.background.dark, flex: 1 }}></View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
  },
  categoriesContainer: {
    paddingBottom: 16,
  },
  categoryCard: {
    height: 120,
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  categoryInfo: {
    padding: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 14,
    color: "#E5E7EB",
  },
});
