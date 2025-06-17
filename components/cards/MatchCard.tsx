import {
  StyleSheet,
  Text,
  Animated,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRef, useEffect } from "react";
import { Match, Team } from "@mytypes";
import { router } from "expo-router";
import { COLORS, FONT_SIZES, SHADOWS, SPACING } from "@/constants/theme";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react-native";

type MatchCardProps = {
  item: Match;
  index: number;
};

export function MatchCard({ item, index }: MatchCardProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const isDark = "dark";

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <View
        key={item.ID}
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
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <View style={styles.dateTime}>
              <ClockIcon size={16} color="#FFF" />
              <Text style={styles.timeText}>{item.hour}</Text>
            </View>
          </View>
          <View style={styles.venueContainer}>
            <MapPinIcon size={16} color="#FFF" />
            <Text style={styles.venueText}>{item.legend}</Text>
          </View>
        </View>

        <View style={styles.matchContent}>
          <View style={styles.teamContainer}>
            <Image source={{ uri: item.localImage }} style={styles.teamShield} />
            <Text style={styles.teamName} numberOfLines={2}>
              {item.localName}
            </Text>
          </View>

          <View style={styles.vsContainer}>
            <Text style={styles.vsText}>VS</Text>
            {item.localResult && (
              <Text style={styles.resultText}>{item.localResult}</Text>
            )}
            {item.legend === "upcoming" && (
              <Text style={styles.upcomingText}>Próximo</Text>
            )}
          </View>

          <View style={styles.teamContainer}>
            <Image
              source={{ uri: item.visitImage }}
              style={styles.teamShield}
            />
            <Text style={styles.teamName} numberOfLines={2}>
              {item.visitName}
            </Text>
          </View>
        </View>

        <View style={styles.matchFooter}>
          <Text style={styles.homeAwayText}>
            TODO
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderTopLeftRadius: 5,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    elevation: 1,
  },
  categoryButton: {
    margin: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  categoryText: {
    fontWeight: "bold",
  },
  matchTitle: {
    flex: 1,
    flexWrap: "wrap",
    flexShrink: 1,
    fontWeight: "bold",
    fontSize: FONT_SIZES.xl,
  },
  matchSubtitle: {
    flex: 1,
    verticalAlign: "middle",
    color: "#111",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
  matchItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  matchListContainer: {
    flex: 1,
  },
  teamImage: {
    width: 60,
    height: 60,
    marginRight: 12,
    padding: 5,
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
