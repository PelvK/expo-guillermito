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
        <ScrollView style={styles.content}>
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
                router.push(`/section4/${category.id}`);
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
});
