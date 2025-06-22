import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, POSITIONS_LIST, SPACING } from "@/constants";
import { useTeamsByTeamId } from "@/hooks/teams";
import { usePositionsByTeamId } from "@/hooks/positions";
import { PositionCard } from "@/components/cards/PositionCard";

export default function TeamStandingsScreen() {
  const { teamID } = useLocalSearchParams();
  const { positions, loadingPositions, errorPositions } = usePositionsByTeamId(
    Number(teamID[0])
  );

  const colorScheme = useColorScheme();
  const isDark = "dark";

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
        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={[styles.headerText, {flex: 1}]}>Pos</Text>
          <Text style={[styles.headerText, {flex: 7}]}>Equipo</Text>
          <Text style={[styles.headerText, {flex: 1}]}>PJ</Text>
          <Text style={[styles.headerText, {flex: 1}]}>G</Text>
          <Text style={[styles.headerText, {flex: 1}]}>E</Text>
          <Text style={[styles.headerText, {flex: 1}]}>P</Text>
          <Text style={[styles.headerText, {flex: 1}]}>GF</Text>
          <Text style={[styles.headerText, {flex: 1}]}>GC</Text>
          <Text style={[styles.headerText, {flex: 1}]}>+/-</Text>
          <Text style={[styles.headerText, {flex: 1}]}>Pts</Text>
        </View>

         <View style={styles.tableBody}>
            {positions?.map((position) => (
              <PositionCard
                item={position}
                key={position.ID}
                index={position.ID}
                isCurrentTeam={position.team.id === Number(teamID[0])}
              />
            ))}
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  standingsContainer: {
    flex: 1,
    padding: SPACING.md,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: COLORS.headers.positionTable.background,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.xs,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flex: 1,
  },
  headerText: {
    color: COLORS.headers.positionTable.font,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    flex: 1,
  },
  tableBody: {
    flex: 1,
  },
  currentTeamText: {
    color: COLORS.positionCard.selected.font,
  },
});
