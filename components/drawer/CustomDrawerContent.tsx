import { BACKGROUND_OPACITY, COLORS, FOOTER_DRAWER_TEXT } from "@/constants";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  StyleSheet,
  View,
  Text,
  Image,
  useColorScheme,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function CustomDrawerContent(props: any) {
  const insets = useSafeAreaInsets();
  const isDark = "dark"; //colorScheme === 'dark';

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("@/assets/background.png")}
        style={{ flex: 1, backgroundColor: COLORS.background.dark }}
        imageStyle={{ opacity: 0.3 }}
      >
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={[styles.container, { paddingTop: insets.top }]}
        >
          <View style={styles.headerContainer}>
            <Image
              source={require("@/assets/banner-guillermito.png")}
              style={styles.bannerImage}
            />
          </View>

          <View
            style={[
              styles.divider,
              { backgroundColor: COLORS.secondaryDark },
            ]}
          />

          <DrawerItemList {...props} />

          <View style={styles.footer}>
            <Image
              source={require("@/assets/logo-efi.png")}
              style={{ height: 140, width: 140 }}
            ></Image>
            <Text style={styles.footerText}>{FOOTER_DRAWER_TEXT}</Text>
          </View>
        </DrawerContentScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    width: "100%",
    resizeMode: "contain",
    height: 110,
    marginTop: 10
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
  },
  divider: {
    height: 2,
    marginVertical: 8,
  },
  footer: {
    padding: 16,
    marginTop: "auto",
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    textAlign: "center",
    padding: 12,
    color: COLORS.background.light,
  },
});
