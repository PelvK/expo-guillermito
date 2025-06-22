import {
  StyleSheet,
  Text,
  Animated,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRef, useEffect } from "react";
import { Position } from "@mytypes";
import { COLORS, SPACING } from "@/constants/theme";

type PositionCardProps = {
  item: Position;
  index: number;
  isCurrentTeam: boolean;
};

export function PositionCard({
  item,
  index,
  isCurrentTeam,
}: PositionCardProps) {
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
        style={[
          styles.itemRow,
          {
            backgroundColor: isCurrentTeam
              ? COLORS.positionCard.selected.background
              : COLORS.positionCard.unselected.background,
          },
          {
            borderColor: isCurrentTeam
              ? COLORS.positionCard.selected.border
              : COLORS.positionCard.unselected.border,
          },
        ]}
      >
        <Text
          style={[
            styles.cell,
            styles.pos,
            {
              color: isCurrentTeam
                ? COLORS.positionCard.selected.font
                : COLORS.positionCard.unselected.font,
            },
          ]}
        >
          {item.position}
        </Text>

        <View style={[styles.cell, styles.team]}>
          <Image style={styles.teamShield} source={{ uri: item.team.shield }} />
          <Text style={[styles.cell, {color: isCurrentTeam ? COLORS.positionCard.selected.font : COLORS.positionCard.unselected.font}]}>
            {item.team.name}
          </Text>
        </View>

        <Text style={[styles.cell, {color: isCurrentTeam ? COLORS.positionCard.selected.font : COLORS.positionCard.unselected.font}]}>
          {item.matchs.played}
        </Text>
        <Text style={[styles.cell, {color: isCurrentTeam ? COLORS.positionCard.selected.font : COLORS.positionCard.unselected.font}]}>
          {item.matchs.won}
        </Text>
        <Text style={[styles.cell, {color: isCurrentTeam ? COLORS.positionCard.selected.font : COLORS.positionCard.unselected.font}]}>
          {item.matchs.drawn}
        </Text>
        <Text style={[styles.cell, {color: isCurrentTeam ? COLORS.positionCard.selected.font : COLORS.positionCard.unselected.font}]}>
          {item.matchs.lost}
        </Text>
        <Text style={[styles.cell, {color: isCurrentTeam ? COLORS.positionCard.selected.font : COLORS.positionCard.unselected.font}]}>
          {item.goals.favor}
        </Text>
        <Text style={[styles.cell, {color: isCurrentTeam ? COLORS.positionCard.selected.font : COLORS.positionCard.unselected.font}]}>
          {item.goals.against}
        </Text>
        <Text style={[styles.cell, {color: isCurrentTeam ? COLORS.positionCard.selected.font : COLORS.positionCard.unselected.font}]}>
          {item.goals.difference > 0
            ? `+${item.goals.difference}`
            : item.goals.difference}
        </Text>
        <Text
          style={[
            styles.cell,
            styles.points,
            styles.pos,
            {
              color: isCurrentTeam
                ? COLORS.positionCard.selected.font
                : COLORS.positionCard.unselected.font,
            },
          ]}
        >
          {item.points}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  pos: {
    fontWeight: "bold",
    color: "#FFF",
  },
  points: {
    fontWeight: "bold",
    alignContent: "center",
  },
  team: {
    flex: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  teamShield: {
    width: 24,
    height: 24,
  },
  teamName: {
    color: "#FFF",
    fontSize: 12,
    flexShrink: 1,
  },

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
  itemsContainer: {
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
  },
  teamColumn: {
    textAlign: "center",
  },
  itemRow: {
    borderWidth: 1,
    flexDirection: "row",
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.xs,
    marginBottom: 2,
    alignItems: "center",
  },
  position: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    flex: 1,
  },
  teamInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  stat: {
    fontSize: 12,
    textAlign: "center",
    flex: 1,
  },
  currentTeamText: {
    color: "#000",
  },
  errorText: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
});
