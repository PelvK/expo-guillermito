import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, SPACING } from "@/constants/theme";
import { useMatchsByCategoryAndDay } from "@/hooks/matchs";
import { MatchCard } from "@/components/cards/MatchCard";

export default function SundayScreen() {
  const { category } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const { matchs, loading, error } = useMatchsByCategoryAndDay(
    Number(category),
    "2025-07-21"
  );
  const isDark = "dark"; //colorScheme === 'dark';

  if (loading) {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDark
              ? COLORS.background.dark
              : COLORS.background.light,
          },
        ]}
      >
        <Text style={{ color: "white", marginBottom: 8 }}>cargando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDark
              ? COLORS.background.dark
              : COLORS.background.light,
          },
        ]}
      >
        <Text style={{ color: "red", marginBottom: 8 }}>Error al traer</Text>
      </View>
    );
  }

  if (!loading && !error && matchs?.length == 0) {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDark
              ? COLORS.background.dark
              : COLORS.background.light,
          },
        ]}
      >
        <Text style={{ color: "white", marginBottom: 8 }}>No hay nada...</Text>
      </View>
    );
  }

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
        Partidos del Domingo - {category}
      </Text>
      {matchs?.map((match) => (
        <MatchCard item={match} index={match.ID} key={match.ID} />
      ))}
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
