import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, SPACING } from "@/constants/theme";
import { useMatchsByCategoryAndDay } from "@/hooks/matchs";
import { MatchCard } from "@/components/cards/MatchCard";
import { CustomBackground } from "@/components/CustomBackground";
import { DAY } from "@/libs/types";
import { CustomLoading } from "@/components/CustomLoading";
import { CustomNoResults } from "@/components/CustomNoResult";

export default function SundayScreen() {
  const { category } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const { matchs, loading, error, refreshMatchs } = useMatchsByCategoryAndDay(
    Number(category),
    DAY.SUNDAY
  );
  const isDark = "dark"; //colorScheme === 'dark';

  if (loading) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <CustomLoading />
        </View>
      </CustomBackground>
    );
  }

  if (error) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <Text style={{ color: "red", marginBottom: 8 }}>Error al traer</Text>
        </View>
      </CustomBackground>
    );
  }

  if (!loading && !error && matchs?.length == 0) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <CustomNoResults onRetry={refreshMatchs} />
        </View>
      </CustomBackground>
    );
  }

  return (
    <CustomBackground>
      <ScrollView
        style={[styles.containerScroll]}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {matchs?.map((match) => (
          <MatchCard item={match} index={match.ID} key={match.ID} />
        ))}
      </ScrollView>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    width: "100%",
    padding: SPACING.md,
  },
  container: {
    flex: 1,
    width: "100%",
    padding: SPACING.md,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: SPACING.lg,
  },
});
