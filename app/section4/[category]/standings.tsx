import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, SPACING, TEAM_LIST } from "@/constants";
import { usePositionsByCategory } from "@/hooks/positions/usePositionByCategory";
import { PositionCard } from "@/components/cards/PositionCard";
import { CustomBackground } from "@/components/screens/CustomBackground";
import { CustomLoading } from "@/components/screens/CustomLoading";
import { CustomNoResults } from "@/components/screens/CustomNoResult";

export default function GroupStandingsScreen() {
  const { category } = useLocalSearchParams();
  const { positions, loadingPositions, errorPositions, refreshPositions } =
    usePositionsByCategory(Number(category));

  const colorScheme = useColorScheme();
  const isDark = "dark";
  if (loadingPositions) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <CustomLoading />
        </View>
      </CustomBackground>
    );
  }

  if (errorPositions) {
    return (
      <View
        style={[styles.container, { backgroundColor: COLORS.background.dark }]}
      >
        <Text style={styles.errorText}>Error al cargar las posiciones</Text>
      </View>
    );
  }

  return (
    <CustomBackground>
      <View style={[styles.container]}>
        {/* Standings Table */}
        {positions && positions.length > 0 ? (
          <ScrollView 
          style={styles.standingsContainer}
          contentContainerStyle={{ paddingBottom: 56 }} 
          >
            {/* Table Header */}

            <View style={styles.tableBody}>
              {positions?.map((positionList) => (
                <View key={positionList.zone.id}>
                  <Text style={styles.zoneHeaderText}>
                    {positionList.zone.description}
                  </Text>
                  <View style={styles.tableHeader}>
                    <Text style={[styles.headerText, { flex: 1 }]}>Pos</Text>
                    <Text style={[styles.headerText, { flex: 5 }]}>Equipo</Text>
                    <Text style={[styles.headerText, { flex: 1 }]}>PJ</Text>
                    <Text style={[styles.headerText, { flex: 1 }]}>G</Text>
                    <Text style={[styles.headerText, { flex: 1 }]}>E</Text>
                    <Text style={[styles.headerText, { flex: 1 }]}>P</Text>
                    <Text style={[styles.headerText, { flex: 1 }]}>GF</Text>
                    <Text style={[styles.headerText, { flex: 1 }]}>GC</Text>
                    <Text style={[styles.headerText, { flex: 1 }]}>+/-</Text>
                    <Text style={[styles.headerText, { flex: 1 }]}>Pts</Text>
                  </View>
                  {positionList.positions.map((position, index) => (
                    <PositionCard
                      item={position}
                      key={position.ID}
                      index={index}
                      isCurrentTeam={false}
                    />
                  ))}
                </View>
              ))}
            </View>
          </ScrollView>
        ) : (
          <View style={[styles.container]}>
            <CustomNoResults onRetry={refreshPositions} />
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
  standingsContainer: {
    padding: 10
  },
  zoneHeaderText: {
    color: COLORS.text.light.primary,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: SPACING.sm,
    textAlign: "center",
    paddingTop: SPACING.lg,
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
    padding: 10,
  },
  errorText: {
    color: COLORS.text.light.primary,
    fontSize: 18,
    textAlign: "center",
    verticalAlign: "middle",
    flex: 1,
  },
});
