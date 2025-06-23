import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
//import { ChevronRight } from 'lucide-react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { BACKGROUND_OPACITY, COLORS } from "@/constants";
import { CustomBackground } from "@/components/CustomBackground";

export default function Section1Screen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <CustomBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Pantalla principal del Guillermito</Text>
      </View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    padding: 14,
    textAlign: "center",
    justifyContent: "center",
    color: COLORS.background.light,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#3B82F6",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
});
