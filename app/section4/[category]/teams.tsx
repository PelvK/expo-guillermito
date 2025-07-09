import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, SPACING, TEAM_LIST } from "@/constants";
import { useTeamsByCategory } from "@/hooks/teams";
import { TeamCard } from "@/components/cards/TeamCard";
import { CustomBackground } from "@/components/screens/CustomBackground";
import { CustomNoResults } from "@/components/screens/CustomNoResult";
import { CustomLoading } from "@/components/screens/CustomLoading";

export default function GroupTeamsScreen() {
  const { category } = useLocalSearchParams();
  const { teams, loadingTeams, errorTeams, refreshTeams } = useTeamsByCategory(
    Number(category)
  );
  const isDark = "dark";

  if (loadingTeams) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <CustomLoading />
        </View>
      </CustomBackground>
    );
  }

  if (errorTeams) {
    return (
      <View
        style={[styles.container, { backgroundColor: COLORS.background.dark }]}
      >
        <Text style={styles.errorText}>Error al cargar los equipos</Text>
      </View>
    );
  }

  return (
    <CustomBackground>
      <View style={[styles.container]}>
        {teams && teams.length > 0 ? (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 56 }}
          >
            {teams.map((item) => {
              return <TeamCard key={item.id} item={item} index={item.id} />;
            })}
          </ScrollView>
        ) : (
          <View style={[styles.container]}>
            <CustomNoResults onRetry={refreshTeams} />
          </View>
        )}
      </View>
    </CustomBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: SPACING.md,
  },
  errorText: {
    color: COLORS.text.light.primary,
    fontSize: 18,
    textAlign: "center",
    verticalAlign: "middle",
    flex: 1,
  },
});
