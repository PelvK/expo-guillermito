import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, POSITIONS_LIST, SPACING } from "@/constants";
import { useTeamsByTeamId } from "@/hooks/teams";
import { usePositionsByTeamId } from "@/hooks/positions";
import { PositionCard } from "@/components/cards/PositionCard";
import { CustomBackground } from "@/components/screens/CustomBackground";
import { CustomText } from "@/components/CustomText";

export default function TeamStandingsScreen() {
  const { teamID } = useLocalSearchParams();
  const { positions, loadingPositions, errorPositions } = usePositionsByTeamId(
    Number(teamID[0])
  );

  const colorScheme = useColorScheme();
  const isDark = "dark";

  return (
    <CustomBackground>
      <View style={[styles.container]}>
        {/* Standings Table */}
        <ScrollView
          style={styles.standingsContainer}
          contentContainerStyle={{ paddingBottom: 56 }}
        >
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <CustomText style={[styles.headerText, { flex: 1 }]}>N°</CustomText>
            <CustomText style={[styles.headerText, { flex: 6 }]}>Equipo</CustomText>
            <CustomText style={[styles.headerText, { flex: 1 }]}>PJ</CustomText>
            <CustomText style={[styles.headerText, { flex: 1 }]}>G</CustomText>
            <CustomText style={[styles.headerText, { flex: 1 }]}>E</CustomText>
            <CustomText style={[styles.headerText, { flex: 1 }]}>P</CustomText>
            <CustomText style={[styles.headerText, { flex: 1 }]}>GF</CustomText>
            <CustomText style={[styles.headerText, { flex: 1 }]}>GC</CustomText>
            <CustomText style={[styles.headerText, { flex: 1 }]}>+/-</CustomText>
            <CustomText style={[styles.headerText, { flex: 1 }]}>Pts</CustomText>
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
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  standingsContainer: {
    flex: 1,
    padding: SPACING.md,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: COLORS.headers.positionTable.background,
    paddingVertical: SPACING.sm,
    paddingHorizontal: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flex: 1,
  },
  headerText: {
    color: COLORS.headers.positionTable.font,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableBody: {
    flex: 1,
  },
  currentTeamText: {
    color: COLORS.positionCard.selected.font,
  },
});
