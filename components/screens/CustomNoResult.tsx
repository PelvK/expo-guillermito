import { COLORS } from "@/constants";
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";

type NoResultsProps = {
  message?: string;
  onRetry?: () => void;
};

export const CustomNoResults: React.FC<NoResultsProps> = ({
  message = "No se encontraron resultados.",
  onRetry,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const isDark = "dark";

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      delay: 100,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Image
        source={require("@/assets/icon_femenino_bn.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.message}>{message}</Text>

      {onRetry && (
        <TouchableOpacity style={styles.button} onPress={onRetry}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: COLORS.card.gold,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
});
