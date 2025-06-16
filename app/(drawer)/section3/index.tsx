import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
//import { ChevronRight } from 'lucide-react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import {
  CATEGORIES_LIST,
  COLORS,
  FONT_SIZES,
  SHADOWS,
  TEAM_LIST,
} from "@/constants/theme";

export default function Section3Screen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [selectedCategory, setSelectedCategory] = useState<String | null>(null);
  const isDark = "dark"; //colorScheme === "dark";

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
      {/* Scroll horizontal */}
      <View style={styles.containerCategoryButton}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {CATEGORIES_LIST.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                {
                  backgroundColor: isDark ? COLORS.secondary : COLORS.primary,
                  ...SHADOWS[isDark ? "dark" : "light"].medium,
                },
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text
                style={[
                  styles.categoryText,
                  {
                    color: isDark
                      ? COLORS.text.dark.primary
                      : COLORS.text.light.primary,
                  },
                ]}
              >
                {category.description}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Scroll vertical que ocupa el resto */}
      <View style={styles.matchListContainer}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {TEAM_LIST.map((team) => (
            <TouchableOpacity
              key={team.id}
              onPress={() => router.push(`/section3/${team.id}`)}
              style={[
                styles.categoryButton,
                {
                  backgroundColor: isDark ? COLORS.secondary : COLORS.primary,
                  ...SHADOWS[isDark ? "dark" : "light"].medium,
                },
              ]}
            >
              <View style={styles.matchItem}>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
                  }}
                  style={styles.userImage}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.matchTitle}>{team.name}</Text>
                  <Text style={styles.matchSubtitle}>{team.category}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  containerCategoryButton: {
    flexDirection: "row",
    paddingVertical: 8,
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
  userImage: {
    width: 64,
    height: 64,
    borderRadius: 25,
    marginRight: 12,
  },
});
