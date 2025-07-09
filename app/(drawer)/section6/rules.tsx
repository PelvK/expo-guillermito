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
import { COLORS, SPACING } from "@/constants/theme";
import { CustomBackground } from "@/components/screens/CustomBackground";
import { PDF_URL } from "@/constants";

export default function RulesScreen() {
  const insets = useSafeAreaInsets();
  const isDark = "dark";

  const rules = [
    {
      id: 1,
      image: "page-001",
    },
    {
      id: 2,
      image: "page-002",
    },
    {
      id: 3,
      image: "page-003",
    },
    {
      id: 4,
      image: "page-004",
    },
    {
      id: 5,
      image: "page-005",
    },
    {
      id: 6,
      image: "page-006",
    },
    {
      id: 7,
      image: "page-007",
    },
    {
      id: 8,
      image: "page-008",
    },
    {
      id: 9,
      image: "page-009",
    },
    {
      id: 10,
      image: "page-010",
    },
    {
      id: 11,
      image: "page-011",
    },
  ];

  const handleOpenPDF = () => {
    Linking.openURL(PDF_URL);
  };

  const rulesRequires: Record<string, any> = {
    "page-001": require("../../../assets/rules/page001.png"),
    "page-002": require("../../../assets/rules/page002.png"),
    "page-003": require("../../../assets/rules/page003.png"),
    "page-004": require("../../../assets/rules/page004.png"),
    "page-005": require("../../../assets/rules/page005.png"),
    "page-006": require("../../../assets/rules/page006.png"),
    "page-007": require("../../../assets/rules/page007.png"),
    "page-008": require("../../../assets/rules/page008.png"),
    "page-009": require("../../../assets/rules/page009.png"),
    "page-010": require("../../../assets/rules/page010.png"),
    "page-011": require("../../../assets/rules/page011.png"),
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
        {rules.map((rule) => (
          <Image
            source={rulesRequires[rule.image]}
            style={[styles.ruleImage]}
            key={rule.id}
          />
        ))}
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
    height: undefined, // Let height be determined by aspect ratio
    aspectRatio: 0.7, // Adjust based on your PDF aspect ratio
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
