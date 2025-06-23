import { Tabs, useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS } from "@/constants/theme";
import { CalendarCheckIcon } from "lucide-react-native";

export default function CategoryTabsLayout() {
  const colorScheme = useColorScheme();
  const { category } = useLocalSearchParams();
  const isDark = "dark"; //colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.tabBar.active,
        tabBarInactiveTintColor: COLORS.tabBar.inactive,
        tabBarStyle: {
          backgroundColor: COLORS.primary
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTitleStyle: {
          color: isDark ? "#FFFFFF" : "#1F2937",
        },
        headerShown: false,
      }}
    >
     <Tabs.Screen
        name="friday"
        options={{
          title: "Viernes",
          tabBarIcon: ({ color, size }) => (
            <CalendarCheckIcon color={color} size={size} />
          ),
        }}
        initialParams={{category: category}}
      />
      <Tabs.Screen
        name="saturday"
        initialParams={{category: category}}
        options={{
          title: "Sábado",
          tabBarIcon: ({ color, size }) => (
            <CalendarCheckIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="sunday"
        initialParams={{category: category}}
        options={{
          title: "Domingo",
          tabBarIcon: ({ color, size }) => (
            <CalendarCheckIcon color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
