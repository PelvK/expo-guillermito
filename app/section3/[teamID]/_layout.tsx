import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import {
  BACKGROUND_OPACITY,
  COLORS,
  SPACING,
  TEAM_NOT_FOUND_TEXT,
} from "@/constants";
import { useTeamsByTeamId } from "@/hooks/teams";
import { CustomBackground } from "@/components/screens/CustomBackground";
import { CustomLoading } from "@/components/screens/CustomLoading";
import { CustomNoResults } from "@/components/screens/CustomNoResult";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

export default function TeamDetailTabsLayout() {
  const colorScheme = useColorScheme();
  const { teamID } = useLocalSearchParams();
  const { team, loadingTeam, errorTeam, refreshTeam } = useTeamsByTeamId(
    Number(teamID)
  );
  const isDark = "dark";

  useEffect(() => {
    console.log(team);
  }, [team]);

  if (!team && !loadingTeam && !errorTeam) {
    return (
      <View style={[styles.container]}>
        <CustomNoResults message={TEAM_NOT_FOUND_TEXT} onRetry={refreshTeam} />
      </View>
    );
  }

  if (loadingTeam) {
    return (
      <CustomBackground>
        <View style={[styles.containerLoading]}>
          <CustomLoading />
        </View>
      </CustomBackground>
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
    <CustomBackground>
      <View style={styles.container}>
        {/* Team Header - Fixed outside navigator */}
        <ImageBackground
          source={require("@/assets/background_header.png")}
          imageStyle={{ opacity: BACKGROUND_OPACITY }}
        >
          <View style={styles.teamHeader}>
            <Image source={{ uri: team?.shield }} style={styles.headerShield} />
            <View style={styles.teamInfo}>
              <Text style={styles.teamHeaderName}>{team?.name}</Text>
              <Text style={styles.teamCategory}>
                Categoría {team?.category.description} -{" "}
                {team?.zone.description}
              </Text>
            </View>
          </View>
        </ImageBackground>

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
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  containerLoading: {
    flex: 1,
    alignItems: "center",
  },
  teamHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.lg,
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
    color: COLORS.text.dark.primary,
    marginBottom: 4,
  },
  teamCategory: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.text.dark.secondary,
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
