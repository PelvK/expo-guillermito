import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
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
import { useRemoteSettings } from "@/hooks/useRemoteSettings";

export default function SilverScreen() {
  const {
    settings,
    loading: loadingSettings,
    error: errorSettings,
  } = useRemoteSettings();
  const { category, categoryName, limitCup } = useLocalSearchParams();
  const [descriptionModalVisible, setDescriptionModalVisible] = useState(false);

  const { matchs, loadingMatchs, errorMatchs, refreshMatchs } =
    useMatchsCupsByCategory(Number(category), CUP.SILVER);

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
      {descriptionModalVisible && (
        <Modal
          animationType="fade"
          transparent
          visible={descriptionModalVisible}
          onRequestClose={() => {
            setDescriptionModalVisible(!descriptionModalVisible);
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.primary,
                padding: 24,
                borderRadius: 10,
                minWidth: "70%",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18, marginBottom: 16, color: "white" }}>
                {settings?.divisionDescriptions[categoryName as string]}
              </Text>
              <TouchableOpacity
                onPress={() => setDescriptionModalVisible(false)}
                style={{
                  marginTop: 12,
                  padding: 10,
                  backgroundColor: COLORS.card.gold,
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{
                    color: COLORS.text.dark.primary,
                    fontWeight: "bold",
                  }}
                >
                  Cerrar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      <View style={{ flexDirection: "row", width: "100%" }}>
        {settings?.showGeneralTable && (
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              router.push({
                pathname: "/section5/general-table/[category]",
                params: {
                  category: category,
                  categoryName: categoryName,
                  limitCup: limitCup,
                },
              });
            }}
          >
            <Text style={styles.textButton}> Ver la tabla general </Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        {settings?.showDivisionDescriptions && (
          <Text
            style={{
              marginHorizontal: 30,
              fontSize: 16,
              alignSelf: "center",
              textAlign: "center",
              color: "white",
              textDecorationLine: "underline",
            }}
            onPress={() => {
              setDescriptionModalVisible(true);
            }}
          >
            Pulsa aquí para ver el criterio de separacion por copas en la
            categoría {categoryName}
          </Text>
        )}
      </View>
      <ScrollView
        style={[styles.containerScroll]}
        contentContainerStyle={{ paddingBottom: 56 }}
      >
        {matchs?.map((match, index) => (
          <MatchCard
            item={match}
            index={index}
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
