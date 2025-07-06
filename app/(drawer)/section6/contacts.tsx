import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS, SPACING, SHADOWS } from "@/constants/theme";
import { CustomBackground } from "@/components/screens/CustomBackground";
import {
  Phone,
  Mail,
  MessageCircle,
  Users,
  Code,
  Trophy,
  ExternalLink,
} from "lucide-react-native";

//copilot I need to add instagram to the code

type ContactInfo = {
  id: number;
  name: string;
  role?: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  instagram?: string;
};

const organizers: ContactInfo[] = [
  {
    id: 1,
    name: "Diego Ratque",
    role: "Coordinador General",
    phone: "+54 9 3404 543478",
    whatsapp: "+54 9 3404 503525",
  },
  {
    id: 2,
    name: "Secretaría C.A.P",
    role: "Secretaría del club organizador",
    phone: "3404 470048",
    email: "correo@example.com",
    whatsapp: "+54 9 3404 417235",
  },
];

const developers: ContactInfo[] = [
  {
    id: 3,
    name: "EFI Humboldt",
    role: "Desarrollo de Software",
    phone: "+54 3496 505638",
    email: "efi.humboldt@gmail.com",
    instagram: "efi.humboldt"
  },
];

export default function ContactsScreen() {
  const insets = useSafeAreaInsets();

  const handlePhonePress = (phone: string) => {
    Linking.openURL(`tel:${phone.replace(/\s|-/g, "")}`);
  };

  const handleEmailPress = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleWhatsAppPress = (phone: string) => {
    const cleanPhone = phone.replace(/\s|-|\+/g, "");
    Linking.openURL(`whatsapp://send?phone=${cleanPhone}`);
  };

  const handleInstagramPress = async (username: string) => {
    const appUrl = `instagram://user?username=${username}`;
    const webUrl = `https://www.instagram.com/${username}`;

    const supported = await Linking.canOpenURL(appUrl);
    if (supported) {
      Linking.openURL(appUrl);
    } else {
      Linking.openURL(webUrl);
    }
  };

  const ContactCard = ({
    contact,
    showRole = true,
  }: {
    contact: ContactInfo;
    showRole?: boolean;
  }) => (
    <View style={styles.contactCard}>
      <View style={styles.contactHeader}>
        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{contact.name}</Text>
          {showRole && contact.role && (
            <Text style={styles.contactRole}>{contact.role}</Text>
          )}
        </View>
      </View>

      <View style={styles.contactActions}>
        {contact.phone && (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handlePhonePress(contact.phone!)}
          >
            <Phone size={20} color={COLORS.secondary} />
            <Text style={styles.actionText}>{contact.phone}</Text>
          </TouchableOpacity>
        )}

        {contact.email && (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleEmailPress(contact.email!)}
          >
            <Mail size={20} color={COLORS.secondary} />
            <Text style={styles.actionText}>{contact.email}</Text>
          </TouchableOpacity>
        )}

        {contact.whatsapp && (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleWhatsAppPress(contact.whatsapp!)}
          >
            <MessageCircle size={20} color={COLORS.secondary} />
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
        )}

        {contact.instagram && (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleInstagramPress(contact.instagram!)}
          >
            <ExternalLink size={20} color={COLORS.secondary} />
            <Text style={styles.actionText}>Instagram</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const SectionHeader = ({
    title,
    icon: Icon,
    description,
  }: {
    title: string;
    icon: any;
    description?: string;
  }) => (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionTitleContainer}>
        <Icon size={24} color={COLORS.secondary} />
        {title && <Text style={styles.sectionTitle}>{title}</Text>}
      </View>
      {description && (
        <Text style={styles.sectionDescription}>{description}</Text>
      )}
    </View>
  );

  return (
    <CustomBackground>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Organizers Section */}
        <View style={styles.section}>
          <SectionHeader title="Organización del Torneo" icon={Trophy} />

          <View style={styles.cardsContainer}>
            {organizers.map((organizer) => (
              <ContactCard key={organizer.id} contact={organizer} />
            ))}
          </View>
        </View>

        {/* Developers Section */}
        <View style={styles.section}>
          <SectionHeader title="Desarrollo de la app" icon={Code} />

          <View style={styles.cardsContainer}>
            {developers.map((developer) => (
              <ContactCard key={developer.id} contact={developer} />
            ))}
          </View>
        </View>

        {/* Footer Info
        <View style={styles.footer}>
          <View style={styles.footerCard}>
            <ExternalLink size={20} color={COLORS.secondary} />
            <Text style={styles.footerText}>
              Para consultas técnicas sobre la aplicación, contacta al equipo de
              desarrollo. Para consultas sobre el torneo, contacta a los
              organizadores.
            </Text>
          </View>
        </View>*/}
      </ScrollView> 
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  header: {
    padding: SPACING.lg,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.text.light.primary,
    marginBottom: SPACING.sm,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.text.light.secondary,
    textAlign: "center",
    lineHeight: 22,
  },
  section: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionHeader: {
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.text.light.primary,
  },
  sectionDescription: {
    fontSize: 14,
    color: COLORS.text.light.secondary,
    lineHeight: 20,
  },
  cardsContainer: {
    gap: SPACING.md,
  },
  contactCard: {
    backgroundColor: COLORS.card.primary + "95",
    borderRadius: 16,
    padding: 14,
  },
  contactHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.lg,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.text.dark.primary,
    marginBottom: 4,
  },
  contactRole: {
    fontSize: 14,
    color: COLORS.text.dark.secondary,
    fontWeight: "500",
  },
  contactActions: {
    gap: SPACING.sm,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card.secondary + "20",
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: 12,
    gap: SPACING.sm,
  },
  actionText: {
    fontSize: 14,
    color: COLORS.text.dark.primary,
    fontWeight: "500",
    flex: 1,
  },
  footer: {
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.lg,
  },
  footerCard: {
    backgroundColor: COLORS.card.primary + "80",
    borderRadius: 12,
    padding: SPACING.lg,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: SPACING.sm,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.text.dark.secondary,
    lineHeight: 20,
    flex: 1,
  },
});
