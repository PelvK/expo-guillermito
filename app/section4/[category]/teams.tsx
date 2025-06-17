import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, SPACING, TEAM_LIST } from "@/constants/theme";

// Mock data for standings
const STANDINGS_DATA = [
  {
    position: 1,
    team: "CLUB ATLÉTICO SARMIENTO DE HUMBOLDT",
    shield: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    played: 10,
    won: 8,
    drawn: 1,
    lost: 1,
    goalsFor: 25,
    goalsAgainst: 8,
    goalDifference: 17,
    points: 25,
  },
  {
    position: 2,
    team: "CLUB JUVENTUD UNIDA DE HUMBOLDT",
    shield: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    played: 10,
    won: 7,
    drawn: 2,
    lost: 1,
    goalsFor: 22,
    goalsAgainst: 10,
    goalDifference: 12,
    points: 23,
  },
  {
    position: 3,
    team: "CLUB ATLÉTICO SAN LORENZO",
    shield: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    played: 10,
    won: 6,
    drawn: 3,
    lost: 1,
    goalsFor: 18,
    goalsAgainst: 12,
    goalDifference: 6,
    points: 21,
  },
  {
    position: 4,
    team: "CLUB ATLÉTICO PILAR",
    shield: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    played: 10,
    won: 5,
    drawn: 2,
    lost: 3,
    goalsFor: 16,
    goalsAgainst: 14,
    goalDifference: 2,
    points: 17,
  },
  {
    position: 5,
    team: "CLUB UNIÓN DE SANTA FÉ",
    shield: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    played: 10,
    won: 2,
    drawn: 1,
    lost: 7,
    goalsFor: 9,
    goalsAgainst: 21,
    goalDifference: -12,
    points: 7,
  },
];

export default function GroupTeamsScreen() {
  const { team } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const isDark = "dark";

  // Find the team data
  const team_r = TEAM_LIST.find((t) => t.id === team);

  if (!team_r) {
    return (
      <View
        style={[styles.container, { backgroundColor: COLORS.background.dark }]}
      >
        <Text style={styles.errorText}>Equipo no encontrado</Text>
      </View>
    );
  }

  const renderStandingRow = (standing: any, index: number) => {
    const isCurrentTeam = standing.team === team_r.name;

    return (
      <View
        key={index}
        style={[
          styles.standingRow,
          isCurrentTeam && styles.currentTeamRow,
          {
            backgroundColor: isCurrentTeam
              ? COLORS.secondary
              : isDark
                ? COLORS.primary
                : COLORS.secondary,
          },
        ]}
      >
        <Text
          style={[styles.position, isCurrentTeam && styles.currentTeamText]}
        >
          {standing.position}
        </Text>

   
        <Text style={[styles.stat, isCurrentTeam && styles.currentTeamText]}>
          {standing.played}
        </Text>
        <Text style={[styles.stat, isCurrentTeam && styles.currentTeamText]}>
          {standing.won}
        </Text>
        <Text style={[styles.stat, isCurrentTeam && styles.currentTeamText]}>
          {standing.drawn}
        </Text>
        <Text style={[styles.stat, isCurrentTeam && styles.currentTeamText]}>
          {standing.lost}
        </Text>
        <Text style={[styles.stat, isCurrentTeam && styles.currentTeamText]}>
          {standing.goalDifference > 0
            ? `+${standing.goalDifference}`
            : standing.goalDifference}
        </Text>
        <Text style={[styles.points, isCurrentTeam && styles.currentTeamText]}>
          {standing.points}
        </Text>
      </View>
    );
  };

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
      {/* Standings Table */}
      <ScrollView style={styles.standingsContainer}>
        <Text style={styles.sectionTitle}>Tabla de Posiciones</Text>

        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Pos</Text>
          <Text style={[styles.headerText, styles.teamColumn]}>Equipo</Text>
          <Text style={styles.headerText}>PJ</Text>
          <Text style={styles.headerText}>G</Text>
          <Text style={styles.headerText}>E</Text>
          <Text style={styles.headerText}>P</Text>
          <Text style={styles.headerText}>DG</Text>
          <Text style={styles.headerText}>Pts</Text>
        </View>

        {/* Table Rows */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.tableBody}>
            {STANDINGS_DATA.map(renderStandingRow)}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  teamHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.lg,
    backgroundColor: COLORS.primary,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
  },
  headerShield: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: SPACING.md,
  },
  teamHeaderInfo: {
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
  standingsContainer: {
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
  tableHeader: {
    flexDirection: "row",
    backgroundColor: COLORS.secondary,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.xs,
    borderRadius: 8,
    marginBottom: SPACING.sm,
    minWidth: 600,
  },
  headerText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    width: 40,
  },
  teamColumn: {
    width: 200,
    textAlign: "left",
  },
  tableBody: {
    minWidth: 600,
  },
  standingRow: {
    flexDirection: "row",
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.xs,
    marginBottom: 2,
    borderRadius: 6,
    alignItems: "center",
  },
  currentTeamRow: {
    borderWidth: 2,
    borderColor: "#FFD700",
  },
  position: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    width: 40,
  },
  teamInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: 200,
  },
  teamShield: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  teamName: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "500",
    flex: 1,
  },
  stat: {
    color: "#FFF",
    fontSize: 12,
    textAlign: "center",
    width: 40,
  },
  points: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    width: 40,
  },
  currentTeamText: {
    color: "#000",
  },
  errorText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
});
