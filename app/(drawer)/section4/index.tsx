import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS, CATEGORIES_LIST, SPACING, SHADOWS } from "@/constants";
import { Bold } from "lucide-react-native";
import { CustomBackground } from "@/components/screens/CustomBackground";
import { useCategoriesWithZones } from "@/hooks/categories/useCategoriesAndZones";
import { CustomLoading } from "@/components/screens/CustomLoading";
import { CustomNoResults } from "@/components/screens/CustomNoResult";

export default function Section4Screen() {
  const { categories, loading, error, refreshCategories } =
    useCategoriesWithZones();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
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
      <View
        style={[
          styles.container,
          {
            paddingBottom: insets.bottom,
          },
        ]}
      >
        <ScrollView style={styles.content}>
          <Text style={styles.title}>Seleccione una categoría</Text>
          {categories && categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                {
                  backgroundColor: isDark
                    ? COLORS.card.primary
                    : COLORS.card.primary,
                  ...SHADOWS[isDark ? "dark" : "light"].medium,
                },
              ]}
              onPress={() => {
                  router.push({
                    pathname: `/section4/${category.id}`,
                    params: {
                      description: category.description,
                    },
                  });
                }}
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
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.sm,
    width: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    margin: SPACING.md,
    textAlign: "center",
    color: "#FFF",
  },
  content: {
    flex: 1,
  },
  categoryButton: {
    padding: SPACING.lg,
    borderRadius: 12,
    marginBottom: SPACING.md,
    marginHorizontal: SPACING.md,
    alignItems: "center",
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: COLORS.text.light.primary,
    fontSize: 18,
    textAlign: "center",
    verticalAlign: "middle",
    flex: 1,
  },
});
