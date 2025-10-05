import { Tabs, useLocalSearchParams, useNavigation } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS } from "@/constants/theme";
import { CalendarCheckIcon } from "lucide-react-native";
import { useEffect } from "react";

export default function CategoryTabsLayout() {
  const colorScheme = useColorScheme();
  const { category, description } = useLocalSearchParams();
  const navigation = useNavigation();
  const isDark = "dark";

  useEffect(() => {
    if (category) {
      navigation.setOptions({
        title: `Partidos por día - ${description}`,
      });
    }
  }, [category, navigation]);

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
