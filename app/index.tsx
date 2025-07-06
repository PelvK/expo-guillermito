import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import AnimatedSplashScreen from "@/components/screens/AnimatedSplashScreen";
import {
  checkForUpdateAsync,
  fetchUpdateAsync,
  reloadAsync,
} from "expo-updates";
import { APP_DONE } from "@/constants";
import { CustomNotReady } from "@/components/screens/CustomNotReady";
import { CustomBackground } from "@/components/screens/CustomBackground";

export const options = {
  headerShown: false,
};

async function onFetchUpdateAsync() {
  try {
    const update = await checkForUpdateAsync();

    if (update.isAvailable) {
      await fetchUpdateAsync();
      await reloadAsync();
    }
  } catch (error) {
    alert(`Error descargando la ultima actualización: ${error}`);
  }
}

export default function Index() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await onFetchUpdateAsync();
    };
    if (!__DEV__) {
      init();
    }
  }, []);

  if (!appReady) {
    return (
      <AnimatedSplashScreen
        onFinish={() => {
          setAppReady(true);
        }}
      />
    );
  }

  if (!APP_DONE) {
    return (
      <CustomBackground>
        <CustomNotReady></CustomNotReady>
      </CustomBackground>
    );
  }
  return <Redirect href="/(drawer)/section1" />;
}
