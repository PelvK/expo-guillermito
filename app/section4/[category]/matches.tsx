import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useColorScheme } from "react-native";
import { COLORS, SPACING, MATCHES_LIST } from "@/constants";
import { MatchCard } from "@/components/cards/MatchCard";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useMatchsByCategory } from "@/hooks/matchs";
import { CustomBackground } from "@/components/screens/CustomBackground";
import { CustomLoading } from "@/components/screens/CustomLoading";
import { CustomNoResults } from "@/components/screens/CustomNoResult";

export default function GroupMatchesScreen() {
  const example = useSafeAreaFrame();
  const { category } = useLocalSearchParams();
  const { matchs, loadingMatchs, errorMatchs, refreshMatchs } =
    useMatchsByCategory(Number(category[0]));
  const isDark = "dark";

  if (loadingMatchs) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <CustomLoading />
        </View>
      </CustomBackground>
    );
  }
  if (errorMatchs) {
    return (
      <View
        style={[styles.container, { backgroundColor: COLORS.background.dark }]}
      >
        <Text style={styles.errorText}>Error al cargar los partidos</Text>
      </View>
    );
  }

  return (
    <CustomBackground>
      <View style={[styles.container]}>
        {/* Matches List */}
        {matchs && matchs?.length > 0 ? (
          <ScrollView
            style={styles.matchesList}
            contentContainerStyle={{ paddingBottom: 56 }}
          >
            {matchs?.map((item) => {
              return <MatchCard key={item.ID} item={item} index={item.ID} />;
            })}
          </ScrollView>
        ) : (
          <View style={[styles.container]}>
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
    paddingBottom: 10,
    paddingStart: SPACING.md,
    paddingEnd: SPACING.md,
    paddingTop: SPACING.md,
    marginBottom: SPACING.md,
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
    verticalAlign: "middle",
    flex: 1,
  },
});
