import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
//import { ChevronRight } from 'lucide-react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { CATEGORIES_LIST, COLORS, FONT_SIZES, SHADOWS } from "@/constants";
import { TeamCard } from "@/components/cards/TeamCard";
import { useTeamsByCategory } from "@/hooks/teams";
import { CustomBackground } from "@/components/screens/CustomBackground";
import { CustomLoading } from "@/components/screens/CustomLoading";
import { CustomNoResults } from "@/components/screens/CustomNoResult";
import { useCategoriesWithZones } from "@/hooks/categories/useCategoriesAndZones";

export default function Section3Screen() {
  const { categories, loading, error, refreshCategories } =
    useCategoriesWithZones();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const { teams, loadingTeams, errorTeams, refreshTeams } =
    useTeamsByCategory(selectedCategory);
  const isDark = "dark";

  if (loading) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <CustomLoading />
        </View>
      </CustomBackground>
    );
  }

  if (error) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <Text style={styles.errorText}>Error al cargar las posiciones</Text>
        </View>
      </CustomBackground>
    );
  }

  if (!loading && !error && categories?.length == 0) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <CustomNoResults onRetry={refreshCategories} />
        </View>
      </CustomBackground>
    );
  }
  
  return (
    <CustomBackground>
      <View style={[styles.container]}>
        {/* Scroll horizontal */}
        <View style={styles.containerCategoryButton}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories && categories.map((category) => (
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
                <Text style={[styles.categoryText]}>
                  {category.description}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Scroll vertical que ocupa el resto */}
        {loadingTeams && (
          <View style={[styles.containerLoading]}>
            <CustomLoading />
          </View>
        )}

        {errorTeams && (
          <View style={[styles.container]}>
            <Text style={{ color: "red", marginBottom: 8 }}>
              Error al traer
            </Text>
          </View>
        )}

        {!errorTeams && !loadingTeams && (
          <View style={styles.matchListContainer}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, paddingBottom: 56 }}
            >
              {teams?.length === 0 ? (
                <CustomNoResults onRetry={refreshTeams} />
              ) : (
                teams?.map((team, index) => (
                  <TeamCard key={team.id} item={team} index={index} />
                ))
              )}
            </ScrollView>
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
    padding: 8,
  },
  containerLoading: {
    flex: 1,
    padding: 8,
    alignItems: "center",
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
   errorText: {
    color: COLORS.text.light.primary,
    fontSize: 18,
    textAlign: "center",
    verticalAlign: "middle",
    flex: 1,
  },
});
