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
import { COLORS, CATEGORIES_LIST, SPACING, SHADOWS } from "@/constants/theme";
import { Bold } from "lucide-react-native";

export default function Section2Screen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = "dark";
  //const isDark = colorScheme === 'dark';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark
            ? COLORS.background.dark
            : COLORS.background.light,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Seleccione una categoría</Text>
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
            onPress={() => {
              router.push(`/section2/${category.id}`);
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.sm,
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
});
