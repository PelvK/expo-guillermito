import { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { useFrameworkReady } from "@/hooks/useFrameworkReady";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { CustomDrawerContent } from "@/components/drawer/CustomDrawerContent";
import {
  Chrome as Home,
  Settings,
  FileText,
  ChartBar as BarChart4,
  ShoppingCart,
  User,
} from "lucide-react-native";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { COLORS } from "@/constants/theme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  useFrameworkReady();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen
            name="section1/detail"
            options={{
              title: "Section 1 Detail",
              presentation: "card",
              animation: "slide_from_right",
            }}
          />
          <Stack.Screen
            name="section2/[category]"
            options={{
              title: "Partidos por día",
              presentation: "card",
              animation: "slide_from_right",
              headerStyle: {
                backgroundColor: COLORS.background.dark,
              },
              headerTintColor: "#FFFFFF",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="section3/[teamID]"
            options={{
              title: "Detalles del equipo",
              animation: "slide_from_right",
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: "#FFFFFF",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="section4/[category]"
            options={{
              title: "Detalles de la categoría",
              animation: "slide_from_right",
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: "#FFFFFF",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="section5/[category]"
            options={{
              title: "Cruces de la categoría",
              animation: "slide_from_right",
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: "#FFFFFF",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen name="+not-found" options={{ title: "Not Found" }} />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
