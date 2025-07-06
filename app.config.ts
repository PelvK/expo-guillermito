import "dotenv/config";
import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  const ENV = process.env.ENV || "dev";

  let name = "Torneo Guillermito 2025";
  let slug = "expo-guillermito";
  let bundleIdentifier = "com.efihumboldt.guillermito-app";
  let androidPackage = "com.efihumboldt.guillermito-app";

  if (ENV === "development") {
    name = "Torneo Guillermito Dev";
    bundleIdentifier = "com.efihumboldt.guillermito-app-dev";
    androidPackage = "com.efihumboldt.guillermito-app-dev";
  } else if (ENV === "preview") {
    name = "Torneo Guillermito Preview";
    bundleIdentifier = "com.efihumboldt.guillermito-app-prev";
    androidPackage = "com.efihumboldt.guillermito-app-prev";
  } else if (ENV === "production") {
    name = "Torneo Guillermito 2025";
    bundleIdentifier = "com.efihumboldt.guillermito-app";
    androidPackage = "com.efihumboldt.guillermito-app";
  }

  return {
    ...config,
    name: name,
    slug: slug,
    ios: {
      ...config.ios,
      bundleIdentifier: bundleIdentifier,
    },
    android: {
      ...config.android,
      package: androidPackage,
    },
    plugins: [...(config.plugins || [])],
    extra: {
      ...config.extra,
      ENV,
    },
  };
};
