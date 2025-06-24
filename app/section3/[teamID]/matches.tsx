import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import {
  COLORS,
  SPACING,
  MATCHES_LIST,
  TEAM_NOT_FOUND_TEXT,
} from "@/constants";
import { useTeamsByTeamId } from "@/hooks/teams";
import { MatchCard } from "@/components/cards/MatchCard";
import { useMatchsByTeamId } from "@/hooks/matchs";
import { CustomBackground } from "@/components/CustomBackground";
import { CustomLoading } from "@/components/CustomLoading";
import { CustomNoResults } from "@/components/CustomNoResult";

export default function TeamMatchesScreen() {
  const { teamID } = useLocalSearchParams();
  const { matchs, loadingMatch, errorMatch, refreshMatchs } = useMatchsByTeamId(
    Number(teamID[0])
  );
  const isDark = "dark";

  if (errorMatch) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <CustomNoResults onRetry={refreshMatchs} />
        </View>
      </CustomBackground>
    );
  }

  if (loadingMatch) {
    return (
      <CustomBackground>
        <View style={[styles.containerLoading]}>
          <CustomLoading />
        </View>
      </CustomBackground>
    );
  }

  return (
    <CustomBackground>
      <View style={[styles.container]}>
        {/* Matches List */}
        {matchs && matchs?.length > 0 ? (
          <ScrollView
            style={styles.matchesList}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {matchs?.map((item) => (
              <MatchCard item={item} index={item.ID} key={item.ID} />
            ))}
          </ScrollView>
        ) : (
          <View style={[styles.containerLoading]}>
            <CustomNoResults onRetry={refreshMatchs} />
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
  },
  containerLoading: {
    flex: 1,
    alignItems: "center",
    verticalAlign: "middle",
  },
  headerShield: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: SPACING.md,
  },
  teamInfo: {
    flex: 1,
  },
  teamHeaderName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 4,
  },
  teamCategory: {
    fontSize: 14,
    color: "#CCC",
  },
  matchesList: {
    flex: 1,
    padding: SPACING.md,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: SPACING.lg,
    textAlign: "center",
  },
  matchCard: {
    borderRadius: 12,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },
  matchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SPACING.sm,
  },
  dateTimeContainer: {
    flexDirection: "row",
    gap: SPACING.sm,
  },
  dateTime: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  dateText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "500",
  },
  timeText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "500",
  },
  venueContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  venueText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "500",
  },
  matchContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: SPACING.sm,
  },
  teamContainer: {
    flex: 1,
    alignItems: "center",
  },
  teamShield: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 8,
  },
  teamName: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  vsContainer: {
    alignItems: "center",
    paddingHorizontal: SPACING.md,
  },
  vsText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultText: {
    color: COLORS.secondary,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
  upcomingText: {
    color: "#CCC",
    fontSize: 12,
    marginTop: 4,
  },
  matchFooter: {
    alignItems: "center",
    marginTop: SPACING.sm,
  },
  homeAwayText: {
    color: "#CCC",
    fontSize: 12,
    fontWeight: "500",
  },
  errorText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
});
