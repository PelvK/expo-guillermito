import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, SPACING } from "@/constants/theme";
import { useMatchsCupsByCategory } from "@/hooks/matchs";
import { CustomBackground } from "@/components/CustomBackground";
import { MatchCard } from "@/components/cards/MatchCard";
import { CUP } from "@/libs/types";
import { CustomLoading } from "@/components/CustomLoading";
import { CustomNoResults } from "@/components/CustomNoResult";

export default function GoldScreen() {
  const { category } = useLocalSearchParams();
  const { matchs, loadingMatchs, errorMatchs, refreshMatchs } =
    useMatchsCupsByCategory(Number(category[0]), CUP.GOLD);

  if (loadingMatchs) {
    return (
      <CustomBackground>
        <CustomLoading />
      </CustomBackground>
    );
  }

  if (errorMatchs) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <Text style={{ color: "red", marginBottom: 8 }}>Error al traer</Text>
        </View>
      </CustomBackground>
    );
  }

  if (!loadingMatchs && !errorMatchs && matchs?.length == 0) {
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
          <MatchCard
            item={match}
            index={match.ID}
            key={match.ID}
            type={CUP.GOLD}
          />
        ))}
      </ScrollView>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.md,
    width: "100%",
    alignItems: "center",
  },
  containerScroll: {
    flex: 1,
    padding: SPACING.md,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: SPACING.lg,
    flex: 1,
    textAlign: "center",
  },
});
