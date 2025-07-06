import React, { act } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, SPACING } from "@/constants/theme";
import {
  CalendarCheck as CalendarCheckIcon,
  Trophy as TrophyIcon,
} from "lucide-react-native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

export default function GroupDetailsTabsLayout() {
  const colorScheme = useColorScheme();
  const { category, categoryName, limitCup } = useLocalSearchParams();
  const isDark = "dark"; //colorScheme === 'dark';

  if (!category) {
    return (
      <View
        style={[styles.container, { backgroundColor: COLORS.background.dark }]}
      >
        <Text style={styles.errorText}>Categoría no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Navigator - Static below header */}
      <View style={styles.navigatorContainer}>
        <MaterialTopTabs
          screenOptions={{
            tabBarActiveTintColor: COLORS.tabBar.active,
            tabBarInactiveTintColor: COLORS.tabBar.inactive,
            tabBarStyle: {
              backgroundColor: COLORS.headers.cupsTopBar.background,
            },
            tabBarIndicatorStyle: {
              backgroundColor: COLORS.secondary,
              height: 3,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: "bold",
              textTransform: "none",
            },
            tabBarPressColor: COLORS.secondary + "20",
            swipeEnabled: true,
          }}
        >
          <MaterialTopTabs.Screen
            name="gold"
            options={{
              title: "Copa de Oro",
              tabBarIcon: ({ color }: { color: string }) => (
                <TrophyIcon size={20} color={color} />
              ),
            }}
            initialParams={{
              category: category,
              categoryName: categoryName,
              limitCup: limitCup
            }}
          />
          <MaterialTopTabs.Screen
            name="silver"
            options={{
              title: "Copa de Plata",
              tabBarIcon: ({ color }: { color: string }) => (
                <TrophyIcon size={20} color={color} />
              ),
            }}
            initialParams={{
              category: category,
              categoryName: categoryName,
              limitCup: limitCup
            }}
          />
        </MaterialTopTabs>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.dark,
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
  navigatorContainer: {
    flex: 1,
  },
  errorText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
});
