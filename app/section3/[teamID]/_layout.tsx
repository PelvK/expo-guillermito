import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, SPACING } from "@/constants";
import { useTeamsByTeamId } from "@/hooks/teams";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

export default function TeamDetailTabsLayout() {
  const colorScheme = useColorScheme();
  const { teamID } = useLocalSearchParams();
  const { team, loadingTeam, errorTeam } = useTeamsByTeamId(teamID[0]);
  const isDark = "dark"; //colorScheme === 'dark';

  useEffect(() => {
    console.log(team);
  }, [team]);

  if (!team && !loadingTeam && !errorTeam) {
    return (
      <View
        style={[styles.container, { backgroundColor: COLORS.background.dark }]}
      >
        <Text style={styles.errorText}>Equipo no encontrado</Text>
      </View>
    );
  }

  if (loadingTeam) {
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
        <Text style={{ color: "white", marginBottom: 8 }}>cargando...</Text>
      </View>
    );
  }

  if (errorTeam) {
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
        <Text style={{ color: "red", marginBottom: 8 }}>Error al traer</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Team Header - Fixed outside navigator */}
      <View style={styles.teamHeader}>
        <Image source={{ uri: team?.shield }} style={styles.headerShield} />
        <View style={styles.teamInfo}>
          <Text style={styles.teamHeaderName}>{team?.name}</Text>
          <Text style={styles.teamCategory}>
            Categoría {team?.category.description} - {team?.zone.description}
          </Text>
        </View>
      </View>

      {/* Navigator - Static below header */}
      <View style={styles.navigatorContainer}>
        <MaterialTopTabs
          screenOptions={{
            tabBarActiveTintColor: COLORS.tabBar.active,
            tabBarInactiveTintColor: COLORS.tabBar.inactive,
            tabBarStyle: {
              backgroundColor: COLORS.headers.matchTopBar.background,
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
            name="matches"
            options={{
              title: "Partidos",
            }}
            initialParams={{ teamID: teamID }}
          />
          <MaterialTopTabs.Screen
            name="standings"
            options={{
              title: "Tabla",
            }}
            initialParams={{ teamID: teamID }}
          />
        </MaterialTopTabs>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.headers.matchDetail.background,
  },
  teamHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.lg,
    backgroundColor: COLORS.primary,
  },
  headerShield: {
    width: 60,
    height: 60,
    marginRight: SPACING.md,
  },
  teamInfo: {
    flex: 1,
  },
  teamHeaderName: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.headers.matchDetail.title,
    marginBottom: 4,
  },
  teamCategory: {
    fontSize: 14,
    color: COLORS.headers.matchDetail.subtitle,
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
