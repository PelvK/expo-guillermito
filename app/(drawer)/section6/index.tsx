import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { COLORS, SPACING } from "@/constants/theme";
import { CustomBackground } from "@/components/screens/CustomBackground";
import { MAP_URL } from "@/constants";


export default function InstalationsScreen() {
  const insets = useSafeAreaInsets();
    const isDark = "dark";
  
    const handleOpenPDF = () => {
      Linking.openURL(MAP_URL);
    };
  
    return (
      <CustomBackground>
        <ScrollView
          style={[styles.containerScroll]}
          contentContainerStyle={{ paddingBottom: 56 }}
        >
          <TouchableOpacity style={[styles.button]} onPress={handleOpenPDF}>
            <Text style={styles.textButton}> ver archivo PDF </Text>
          </TouchableOpacity>
          <Image
              source={require("../../../assets/docs/map.png")}
              style={[styles.ruleImage]}
            />
        </ScrollView>
        <View style={{ flexDirection: "row", width: "100%" }}></View>
      </CustomBackground>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    button: {
      backgroundColor: COLORS.card.gold,
      padding: 16,
      flex: 1,
      margin: 20,
      borderRadius: 6,
    },
    // Styles
    ruleImage: {
      width: "100%",
      height: undefined,
      aspectRatio: 0.7, 
      marginBottom: SPACING.xs,
      resizeMode: "contain",
    },
  
    containerScroll: {
      flex: 1,
      padding: SPACING.md,
      width: "100%",
    },
    textButton: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      color: COLORS.text.dark.primary,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 24,
    },
    categoriesContainer: {
      paddingBottom: 16,
    },
    categoryCard: {
      height: 120,
      borderRadius: 12,
      marginBottom: 16,
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    categoryImage: {
      width: "100%",
      height: "100%",
      position: "absolute",
    },
    categoryOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    categoryInfo: {
      padding: 16,
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    categoryName: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#FFFFFF",
      marginBottom: 4,
    },
    categoryCount: {
      fontSize: 14,
      color: "#E5E7EB",
    },
  });
