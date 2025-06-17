import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, SPACING, TEAM_LIST, MATCHES_LIST } from "@/constants/theme";
import {
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  MapPin as MapPinIcon,
} from "lucide-react-native";

export default function GroupMatchesScreen() {
  const colorScheme = useColorScheme();
  const isDark = "dark";

  const renderMatch = (match: any) => (
    <View
      key={match.id}
      style={[
        styles.matchCard,
        {
          backgroundColor: isDark ? COLORS.secondary : COLORS.primary,
        },
      ]}
    >
      <View style={styles.matchHeader}>
        <View style={styles.dateTimeContainer}>
          <View style={styles.dateTime}>
            <CalendarIcon size={16} color="#FFF" />
            <Text style={styles.dateText}>{match.date}</Text>
          </View>
          <View style={styles.dateTime}>
            <ClockIcon size={16} color="#FFF" />
            <Text style={styles.timeText}>{match.time}</Text>
          </View>
        </View>
        <View style={styles.venueContainer}>
          <MapPinIcon size={16} color="#FFF" />
          <Text style={styles.venueText}>{match.venue}</Text>
        </View>
      </View>

      <View style={styles.matchContent}>

        <View style={styles.vsContainer}>
          <Text style={styles.vsText}>VS</Text>
          {match.result && (
            <Text style={styles.resultText}>{match.result}</Text>
          )}
          {match.status === "upcoming" && (
            <Text style={styles.upcomingText}>Próximo</Text>
          )}
        </View>

        <View style={styles.teamContainer}>
          <Image
            source={{ uri: match.opponentShield }}
            style={styles.teamShield}
          />
          <Text style={styles.teamName} numberOfLines={2}>
            {match.opponent}
          </Text>
        </View>
      </View>

      <View style={styles.matchFooter}>
        <Text style={styles.homeAwayText}>
          {match.isHome ? "Local" : "Visitante"}
        </Text>
      </View>
    </View>
  );

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
      {/* Matches List */}
      <ScrollView style={styles.matchesList}>
        {MATCHES_LIST.map(renderMatch)}
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
