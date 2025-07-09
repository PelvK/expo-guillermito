import {
  StyleSheet,
  Text,
  Animated,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRef, useEffect } from "react";
import { Team } from "@mytypes";
import { router } from "expo-router";
import { COLORS, FONT_SIZES, SHADOWS } from "@/constants/theme";

type TeamCardProps = {
  item: Team;
  index: number;
};

export function TeamCard({ item, index }: TeamCardProps) {
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
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          console.log("presione el equipo con id: ", item.id)
          router.push(`/section3/${item.id}`)}
        }
        style={[
          styles.categoryButton,
          {
            backgroundColor: isDark ? COLORS.card.primary : COLORS.card.primary,
            ...SHADOWS[isDark ? "dark" : "light"].medium,
          },
        ]}
      >
        <View style={styles.matchItem}>
          <Image
            source={{
              uri: item.shield,
            }}
            style={styles.teamImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.matchTitle}>{item.name}</Text>
            <Text style={styles.matchSubtitle}>Categoría {item.category.description} - {item.zone.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    padding: 5
  },
});
