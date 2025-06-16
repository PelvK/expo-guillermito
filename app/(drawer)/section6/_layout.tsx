import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import {
  Grid2x2 as Grid,
  MapIcon,
  LogsIcon,
  PhoneIcon,
} from "lucide-react-native";
import { COLORS } from "@/constants/theme";

export default function Section6TabsLayout() {
  const colorScheme = useColorScheme();
  const isDark = 'dark'; //colorScheme === "dark";

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
