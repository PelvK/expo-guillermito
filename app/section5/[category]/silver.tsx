import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useColorScheme } from "react-native";
import { COLORS, SPACING } from "@/constants/theme";
import { useMatchsCupsByCategory } from "@/hooks/matchs";
import { CustomBackground } from "@/components/screens/CustomBackground";
import { MatchCard } from "@/components/cards/MatchCard";
import { CUP } from "@/libs/types";
import { CustomLoading } from "@/components/screens/CustomLoading";
import { CustomNoResults } from "@/components/screens/CustomNoResult";

export default function GoldScreen() {
  const { category, categoryName, limitCup } = useLocalSearchParams();
  const { matchs, loadingMatchs, errorMatchs, refreshMatchs } =
    useMatchsCupsByCategory(Number(category[0]), CUP.SILVER);

  if (loadingMatchs) {
    return (
      <CustomBackground>
        <CustomLoading />
      </CustomBackground>
    );
  }

  if (errorMatchs) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <Text style={{ color: "red", marginBottom: 8 }}>Error al traer</Text>
        </View>
      </CustomBackground>
    );
  }

  if (!loadingMatchs && !errorMatchs && matchs?.length == 0) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <CustomNoResults onRetry={refreshMatchs} />
        </View>
      </CustomBackground>
    );
  }

  return (
    <CustomBackground>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            router.push({
              pathname: "/section5/general-table/[category]",
              params: {
                category: category,
                categoryName: categoryName,
                limitCup: limitCup
              },
            });
          }}
        >
          <Text style={styles.textButton}> Ver la tabla general </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={[styles.containerScroll]}
        contentContainerStyle={{ paddingBottom: 56 }}
      >
        {matchs?.map((match) => (
          <MatchCard
            item={match}
            index={match.ID}
            key={match.ID}
            type={CUP.SILVER}
          />
        ))}
      </ScrollView>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.md,
    width: "100%",
    alignItems: "center",
  },
  containerScroll: {
    flex: 1,
    padding: SPACING.md,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: SPACING.lg,
    flex: 1,
    textAlign: "center",
  },
  button: {
    backgroundColor: COLORS.card.silver,
    padding: 16,
    flex: 1,
    margin: 20,
    borderRadius: 6,
  },
  textButton: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.text.dark.primary,
  },
});
