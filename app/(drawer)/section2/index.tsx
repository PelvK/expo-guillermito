import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  COLORS,
  CATEGORIES_LIST,
  SPACING,
  SHADOWS,
  BACKGROUND_OPACITY,
} from "@/constants";
import { CustomBackground } from "@/components/CustomBackground";

export default function Section2Screen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = "dark";
  //const isDark = colorScheme === 'dark';

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
        <ScrollView
          style={styles.content}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <Text style={styles.title}>Seleccione una categoría</Text>
          {CATEGORIES_LIST.map((category) => (
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
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
