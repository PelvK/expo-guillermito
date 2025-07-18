import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { COLORS, SPACING } from "@/constants/theme";
import { CustomBackground } from "@/components/screens/CustomBackground";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { usePositionsGeneralByCategory } from "@/hooks/positions";
import { PositionCard } from "@/components/cards/PositionCard";
import { CustomNoResults } from "@/components/screens/CustomNoResult";
import { CustomLoading } from "@/components/screens/CustomLoading";

export default function GeneralTableScreen() {
  const { category, categoryName, limitCup } = useLocalSearchParams();
  const { positions, refreshPositions, errorPositions, loadingPositions } =
    usePositionsGeneralByCategory(Number(category));
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Tabla General`,
    });
  }, [category]);

  if (loadingPositions) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <CustomLoading />
        </View>
      </CustomBackground>
    );
  }

  if (errorPositions) {
    return (
      <CustomBackground>
        <View style={[styles.container]}>
          <Text style={styles.errorText}>Error al cargar las posiciones</Text>
        </View>
      </CustomBackground>
    );
  }

  return (
    <CustomBackground>
      <View style={styles.container}>
        {positions && positions.length > 0 ? (
          <ScrollView
            style={styles.standingsContainer}
            contentContainerStyle={{ paddingBottom: 56 }}
          >
            {/* Table Header */}

            <View style={styles.tableBody}>
              <View>
                <Text style={styles.zoneHeaderText}>
                  Tabla general {categoryName}
                </Text>
                <View style={styles.tableHeader}>
                  <Text style={[styles.headerText, { flex: 1 }]}>Pos</Text>
                  <Text style={[styles.headerText, { flex: 5 }]}>Equipo</Text>
                  <Text style={[styles.headerText, { flex: 1 }]}>PJ</Text>
                  <Text style={[styles.headerText, { flex: 1 }]}>G</Text>
                  <Text style={[styles.headerText, { flex: 1 }]}>E</Text>
                  <Text style={[styles.headerText, { flex: 1 }]}>P</Text>
                  <Text style={[styles.headerText, { flex: 1 }]}>GF</Text>
                  <Text style={[styles.headerText, { flex: 1 }]}>GC</Text>
                  <Text style={[styles.headerText, { flex: 1 }]}>+/-</Text>
                  <Text style={[styles.headerText, { flex: 1 }]}>Pts</Text>
                </View>
                {positions.map((position, index) => (
                  <PositionCard
                    item={position}
                    key={position.ID}
                    index={index}
                    isCurrentTeam={false}
                    clasification={true}
                    limit={Number(limitCup)}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        ) : (
          <View style={[styles.container]}>
            <CustomNoResults onRetry={refreshPositions} />
          </View>
        )}
      </View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
  standingsContainer: {
    padding: 10,
  },
  zoneHeaderText: {
    color: COLORS.text.light.primary,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: SPACING.sm,
    textAlign: "center",
    paddingVertical: SPACING.lg,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: COLORS.headers.positionTable.background,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.xs,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flex: 1,
  },
  headerText: {
    color: COLORS.headers.positionTable.font,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    flex: 1,
  },
  tableBody: {
    padding: 10,
  },
  errorText: {
    color: COLORS.text.light.primary,
    fontSize: 18,
    textAlign: "center",
    verticalAlign: "middle",
    flex: 1,
  },
});
