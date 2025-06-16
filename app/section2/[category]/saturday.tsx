import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, SPACING } from "@/constants/theme";

export default function SaturdayScreen() {
  const { category } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const isDark = "dark"; //colorScheme === 'dark';

  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor: isDark
            ? COLORS.background.dark
            : COLORS.background.light,
        },
      ]}
    >
      <Text style={[styles.title, { color: "white" }]}>
        Partidos del Sábado - {category}
      </Text>

      {/* Add your matches list here */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.md,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: SPACING.lg,
  },
});
