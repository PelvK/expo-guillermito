import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { COLORS, SPACING } from "@/constants";
import { CustomBackground } from "@/components/screens/CustomBackground";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Clock,
  Star,
  Award,
  Target,
} from "lucide-react-native";

const { width } = Dimensions.get("window");

// Mock sponsor data - replace with real sponsors
const sponsors = [
  {
    id: 1,
    name: "",
    image: "add-001",
  },
  {
    id: 2,
    name: "",
    image: "add-002",
  },
  {
    id: 3,
    name: "",
    image: "add-003",
  },
  {
    id: 4,
    name: "",
    image: "add-004",
  },
  {
    id: 5,
    name: "",
    image: "add-005",
  },
  {
    id: 6,
    name: "",
    image: "add-006",
  },
];

const sponsorImages: Record<string, any> = {
  "add-001": require("../../../assets/adds/add-001.png"),
  "add-002": require("../../../assets/adds/add-002.png"),
  "add-003": require("../../../assets/adds/add-003.png"),
  "add-004": require("../../../assets/adds/add-004.png"),
  "add-005": require("../../../assets/adds/add-005.png"),
  "add-006": require("../../../assets/adds/add-006.jpg"),
};

const tournamentStats = [
  { icon: Users, label: "Equipos", value: "24", color: COLORS.card.gold },
  { icon: Trophy, label: "Categ.", value: "6", color: COLORS.card.gold },
  { icon: MapPin, label: "Canchas", value: "10", color: COLORS.card.gold },
  { icon: Calendar, label: "Días", value: "2", color: COLORS.card.gold },
];

const highlights = [
  {
    title: "Copa de Oro",
    description: "Competencia principal del torneo",
    icon: Trophy,
    color: COLORS.card.gold,
  },
  {
    title: "Copa de Plata",
    description: "Segunda división de competencia",
    icon: Award,
    color: COLORS.card.silver,
  },
  {
    title: "Fixture Completo",
    description: "Consulta todos los partidos",
    icon: Calendar,
    color: COLORS.secondary,
  },
];

export default function Section1Screen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <CustomBackground>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image
            source={require("@/assets/icon.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>Bienvenidos al</Text>
            <Text style={styles.tournamentTitle}>Torneo Guillermito Femenino 2025 </Text>
          </View>

          {/* Countdown or Date Info */}
          {false && (
            <View style={styles.dateContainer}>
              <Clock size={20} color={COLORS.secondary} />
              <Text style={styles.dateText}>19 - 21 de Julio, 2025</Text>
            </View>
          )}
        </View>

        {/* Tournament Stats */}
        <View style={styles.statsSection}>
          <View style={styles.statsGrid}>
            {tournamentStats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <stat.icon size={24} color={stat.color} />
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>¡Que se diviertan!</Text>
            <Text style={styles.ctaDescription}>
              Explora los equipos, consulta los horarios y sigue todos los
              partidos en tiempo real
            </Text>

            <View style={styles.ctaButtons}>
              <TouchableOpacity
                style={[styles.ctaButton, styles.primaryButton]}
                onPress={() => router.push("/section2")}
              >
                <Calendar size={20} color="#000" />
                <Text style={styles.primaryButtonText}>Ver Partidos</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.ctaButton, styles.secondaryButton]}
                onPress={() => router.push("/section3")}
              >
                <Users size={20} color={COLORS.secondary} />
                <Text style={styles.secondaryButtonText}>Ver Equipos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Sponsors Section */}
        <View style={styles.sponsorsSection}>
          <Text style={styles.sectionTitle}>Nuestros Patrocinadores</Text>
          <Text style={styles.sponsorsSubtitle}>
            Gracias a quienes hacen posible este torneo
          </Text>

          <View style={styles.sponsorsGrid}>
            {sponsors.map((sponsor) => (
              <TouchableOpacity key={sponsor.id} style={styles.sponsorCard}>
                <Image
                  source={sponsorImages[sponsor.image]}
                  style={styles.sponsorImage}
                />

                <View style={styles.sponsorOverlay}>
                  <Text style={styles.sponsorName}>{sponsor.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroSection: {
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    backgroundColor: COLORS.card.primary + "95",
    borderRadius: 12,
    marginBottom: 12,
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.lg,
  },
  logo: {
    width: width * 0.6,
    height: 200,
    marginVertical: SPACING.md,
  },
  welcomeContainer: {
    alignItems: "center",
    marginBottom: SPACING.lg,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: COLORS.text.light.primary,
    textAlign: "center",
  },
  tournamentTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.primaryDark,
    textAlign: "center",
    marginVertical: SPACING.sm,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: COLORS.text.light.secondary,
    textAlign: "center",
    fontStyle: "italic",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card.primary + "90",
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: 12,
    gap: SPACING.sm,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  statsSection: {
    paddingHorizontal: SPACING.lg,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text.light.primary,
    marginBottom: 16,
    textAlign: "center",
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statCard: {
    backgroundColor: COLORS.card.primary + "95",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    width: (width - 17 * 4) / 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.text.dark.secondary,
    fontWeight: "600",
  },
  highlightsSection: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  highlightCard: {
    backgroundColor: COLORS.card.primary + "95",
    borderRadius: 12,
    padding: SPACING.lg,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.md,
  },
  highlightIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
  },
  highlightContent: {
    flex: 1,
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 4,
  },
  highlightDescription: {
    fontSize: 14,
    color: COLORS.text.dark.secondary,
  },
  sponsorsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: SPACING.lg,
    rowGap: SPACING.md,
  },

  sponsorsSection: {
    marginBottom: SPACING.xl,
  },
  sponsorsSubtitle: {
    fontSize: 16,
    color: COLORS.text.light.secondary,
    textAlign: "center",
    marginBottom: SPACING.lg,
    paddingHorizontal: SPACING.lg,
  },
  sponsorsContainer: {
    paddingHorizontal: SPACING.lg,
    gap: SPACING.md,
  },
  sponsorCard: {
    width: (width - SPACING.lg * 2 - SPACING.md * 2) / 3,
    aspectRatio: 1,
    borderRadius: 12,
    overflow: "hidden",
  },

  sponsorImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  sponsorOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  sponsorName: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  ctaSection: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  ctaCard: {
    backgroundColor: COLORS.card.primary + "95",
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
    marginVertical: SPACING.md,
  },
  ctaDescription: {
    fontSize: 16,
    color: COLORS.text.dark.secondary,
    textAlign: "center",
    marginBottom: SPACING.xl,
    lineHeight: 24,
  },
  ctaButtons: {
    flexDirection: "row",
    gap: SPACING.md,
    width: "100%",
  },
  ctaButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: 12,
    gap: SPACING.sm,
  },
  primaryButton: {
    backgroundColor: COLORS.secondary,
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
  primaryButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButtonText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },
  footerLogo: {
    width: 80,
    height: 80,
    marginBottom: SPACING.md,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.text.light.secondary,
    textAlign: "center",
  },
});
