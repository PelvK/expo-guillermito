import { Tabs, withLayoutContext } from "expo-router";
import { useColorScheme } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  Grid2x2 as Grid,
  MapIcon,
  LogsIcon,
  PhoneIcon,
} from "lucide-react-native";
import { COLORS } from "@/constants/theme";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

export default function Section6TabsLayout() {
  const colorScheme = useColorScheme();
  const isDark = 'dark'; //colorScheme === "dark";


  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.tabBar.active,
        tabBarInactiveTintColor: COLORS.tabBar.inactive,
        tabBarStyle: {
          backgroundColor: isDark ? COLORS.primary : '#FFFFFF',
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
        name="index"
        options={{
          title: "Instalaciones",
        }}
      />
      <MaterialTopTabs.Screen
        name="rules"
        options={{
          title: "Reglamento",
        }}
      />
      <MaterialTopTabs.Screen
        name="contacts"
        options={{
          title: "Contactos",
        }}
      />
    </MaterialTopTabs>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.tabBar.active,
        tabBarInactiveTintColor: COLORS.tabBar.inactive,
        tabBarStyle: {
          backgroundColor: isDark ? COLORS.primary : '#FFFFFF',
        },
        headerStyle: {
          backgroundColor: isDark ? "#111827" : "#F9FAFB",
        },
        headerTitleStyle: {
          color: isDark ? "#FFFFFF" : "#1F2937",
        },
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Instalaciones",
          tabBarIcon: ({ color, size }) => (
            <MapIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="rules"
        options={{
          title: "Reglamento",
          tabBarIcon: ({ color, size }) => (
            <LogsIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contactos",
          tabBarIcon: ({ color, size }) => (
            <PhoneIcon color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
