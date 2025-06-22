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
import { COLORS, FONT_SIZES, SPACING } from "@/constants/theme";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react-native";

type MatchCardProps = {
  item: Match;
  index: number;
};

export function MatchCard({ item, index }: MatchCardProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const isDark = "dark";

  console.log(item);
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
            backgroundColor: isDark ? COLORS.card.primary : COLORS.card.primary
          },
        ]}
      >
        {/*Card header space*/}
        <View style={styles.matchHeader}>
          <View style={styles.legendContainer}>
            <Text style={styles.legendText}>{item.legend}</Text>
          </View>
        </View>

        <View style={styles.matchContent}>
          {/*Local team space*/}
          <View style={styles.teamContainer}>
            <Image
              source={{ uri: item.localTeam.shield }}
              style={styles.teamShield}
            />
            <Text style={styles.teamName} numberOfLines={2}>
              {item.localTeam.name}
            </Text>
          </View>

          {/*Center space*/}
          <View style={styles.vsContainer}>
            {item.localResult && item.visitResult && (
              <Text style={{verticalAlign: "top" }}>Finalizado</Text>
            )}
            <Text style={styles.vsText}>VS</Text>
            {item.localResult && item.visitResult && (
              <View style={styles.backResult}>
                <Text style={styles.resultText}>{item.localResult}</Text>
                <Text style={styles.resultText}>-</Text>
                <Text style={styles.resultText}>{item.visitResult}</Text>
              </View>
            )}
          </View>

          {/*Visit team space*/}
          <View style={styles.teamContainer}>
            <Image
              source={{ uri: item.visitTeam.shield }}
              style={styles.teamShield}
            />
            <Text style={styles.teamName} numberOfLines={2}>
              {item.visitTeam.name}
            </Text>
          </View>
        </View>

        {/*Footer card space*/}
        <View style={styles.matchFooter}>
          <View style={styles.venueContainer}>
            <MapPinIcon size={16} color="#FFF" />
            <Text style={styles.venueText}>{item.place.description}</Text>
          </View>
          <View style={styles.dateContainer}>
            <CalendarIcon size={16} color="#FFF" />
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
          <View style={styles.hourContainer}>
            <ClockIcon size={16} color="#FFF" />
            <Text style={styles.timeText}>{item.hour}</Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
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
    marginBottom: SPACING.md,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    elevation: 1,
  },
  matchHeader: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 4,
    backgroundColor: COLORS.card.secondary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  matchFooter: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 4,
    backgroundColor: COLORS.card.secondary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  dateTimeContainer: {
    flexDirection: "row",
    gap: SPACING.sm,
  },
  dateTime: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  dateText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "500",
  },
  timeText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "500",
  },
  legendText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "500",
  },
  venueContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginHorizontal: 10
  },
  hourContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  legendContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  venueText: {
    color: "#FFF",
    fontSize: 14,
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
    marginBottom: 6,
  },
  teamName: {
    color: "#333",
    fontSize: 14,
    paddingHorizontal: 4,
    fontWeight: "bold",
    textAlign: "center",
  },
  vsContainer: {
    alignItems: "center",
    paddingHorizontal: 4,
  },
  vsText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
  upcomingText: {
    color: "#CCC",
    fontSize: 12,
    marginTop: 4,
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
  backResult: {
    backgroundColor: COLORS.card.terciary,
    flexDirection: "row", 
    paddingHorizontal: 6,
    borderRadius: 5
  }
});
