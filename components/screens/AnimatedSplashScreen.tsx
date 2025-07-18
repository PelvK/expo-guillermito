import React, { useEffect, useRef } from "react";
import { Animated, Easing, View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import SplashIcon from "@/assets/icon_femenino.png";
import { CustomBackground } from "./CustomBackground";

const AnimatedSplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  if (process.env.NODE_ENV === "test") {
    useEffect(() => {
      SplashScreen.hideAsync();
      onFinish();
    }, []);
    return <View />;
  }

  const imageTranslateY = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = async () => {
      await SplashScreen.hideAsync();
      Animated.sequence([
        Animated.timing(imageTranslateY, {
          toValue: -50,
          duration: 1000,
          easing: Easing.bezier(0.5, -0.01, 0.18, 1.2),
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 1300,
          delay: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        onFinish();
      });
    };
    animate();
  }, []);

  return (
    <CustomBackground>
      <View style={{ marginTop: 100}}>
        <Animated.Image
          source={SplashIcon}
          style={[
            { transform: [{ translateY: imageTranslateY }] },
            styles.image,
          ]}
          resizeMode="contain"
        />
      </View>
    </CustomBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 350,
  },
});

export default AnimatedSplashScreen;
