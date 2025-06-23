import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, SPACING } from "@/constants/theme";
import { useMatchsByCategoryAndDay } from "@/hooks/matchs";
import { MatchCard } from "@/components/cards/MatchCard";
import { CustomBackground } from "@/components/CustomBackground";
import { Container } from "lucide-react-native";
import { DAY } from "@/libs/types";
import { CustomLoading } from "@/components/CustomLoading";
import { CustomNoResults } from "@/components/CustomNoResult";

export default function FridayScreen() {
  const colorScheme = useColorScheme();
  const { category } = useLocalSearchParams();
  const { matchs, loading, error, refreshMatchs } = useMatchsByCategoryAndDay(
    Number(category),
    DAY.FRIDAY
  );
  const isDark = "dark"; // colorScheme === 'dark';

  if (loading) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <CustomLoading/>
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
        <CustomNoResults onRetry={refreshMatchs}/>
      </CustomBackground>
    );
  }

  return (
    <CustomBackground>
      <ScrollView style={[styles.containerScroll]}>
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
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: SPACING.lg,
  },
});
